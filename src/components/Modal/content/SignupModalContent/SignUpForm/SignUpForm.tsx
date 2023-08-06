import React, { Fragment } from 'react';
import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { initialValues, inputsData } from './inputsData';
import { Button } from '../../../../Button';
import { NewUser } from '../../../../../types/User';
import styles from './SignUpForm.module.scss';

interface Props {
  createAccount: (user: NewUser) => void,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  isError: boolean,
}

export const SignUpForm = React.memo<Props>(({ createAccount, setIsError, isError }) => {
  const validationSchema = yup.object().shape({
    name: yup.string()
      .required('Name is required')
      .matches(/^[a-zA-Z ]+$/, 'Name must contain only letters from the English alphabet')
      .trim(),
    email: yup.string().required('Email is required').email('Invalid email'),
    phone: yup.number()
      .typeError('Phone must contain only digits')
      .integer('Phone must be an integer')
      .min(1, 'Phone must contain at least 1 digit')
      .max(9999999999, 'Phone must contain at most 10 digits'),
    password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        'Password must contain at least one number, one lowercase letter and one uppercase letter from the English alphabet'
      ),
  })

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={(user) => createAccount(user)}
      initialValues={initialValues}
    >
      <Form>
        {inputsData.map(({ name, type = 'text', placeholder, label }) => (
          <Fragment key={name}>
            <label htmlFor="name" className="label">
              {label}
            </label>
            <Field
              name={name}
              id={name}
              type={type}
              className={classNames('input', styles.field)}
              placeholder={placeholder}
              onClick={() => setIsError(false)}
            />
            <ErrorMessage name={name} component="div" className={styles.error} />
          </Fragment>
        ))}
        {isError && <p className={styles.error}>Something went wrong</p>}
        <Button type="submit">Створити акаунт</Button>
      </Form>
    </Formik>
  )
});
