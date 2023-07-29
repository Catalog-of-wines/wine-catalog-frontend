import { FC, Fragment } from 'react';
import { Field, Form, Formik } from 'formik';
import { initialValues, inputsData } from './inputsData';
import { Button } from '../../../../Button';
import { NewUser } from '../../../../../types/User';
import styles from './SignUpForm.module.scss';

interface Props {
  createAccount: (user: NewUser) => void;
}

export const SignUpForm: FC<Props> = ({ createAccount }) => (
  <Formik
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
            className={`input ${styles.input}`}
            placeholder={placeholder}
          />
        </Fragment>
      ))}
      <Button type="submit">Створити акаунт</Button>
    </Form>
  </Formik>
);
