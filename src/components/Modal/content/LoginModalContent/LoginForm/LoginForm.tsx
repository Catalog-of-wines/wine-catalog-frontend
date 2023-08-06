import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import { loginUser } from '../../../../../api/login';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as authActions from '../../../../../features/auth/authSlice';
import * as yup from 'yup';
import { useAppDispatch } from '../../../../../app/hooks';
import { initialValues, inputsData } from './inputsData';
import { Button } from '../../../../Button';
import { NewUser } from '../../../../../types/User';
import styles from './LoginForm.module.scss';

interface Props {
  onClose: () => void;
}

const LoginForm = React.memo<Props>(({ onClose }) => {
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);

  const logIn = async (user: NewUser) => {
    try {
      const response = await loginUser(user);

      dispatch(authActions.addUser(response.data));

      onClose();
    } catch {
      setIsError(true);
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email'),
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
      initialValues={initialValues}
      onSubmit={(values) => logIn({
        name: '',
        email: values.email,
        password: values.password,
        telephone: '',
      })}
    >
      <Form>
        {inputsData.map(({ name, type = 'text', placeholder, label }) => (
          <Fragment key={name}>
            <label htmlFor={name} className="label">
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
        {isError && <p className={styles.error}>Wrong email or password</p>}
        <Button type="submit">Увійти</Button>
      </Form>
    </Formik>
  )
});

export default LoginForm;