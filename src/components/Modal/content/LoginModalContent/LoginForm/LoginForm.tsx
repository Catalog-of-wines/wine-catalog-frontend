import { Field, Form, Formik } from 'formik';
import styles from './LoginForm.module.scss';
import { initialValues, inputsData } from './inputsData';
import { Button } from '../../../../Button';
import { FC, Fragment } from 'react';

const LoginForm: FC = () => (
  <Formik
    onSubmit={(values) => console.log(values)}
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
      <Button type="submit">Увійти</Button>
    </Form>
  </Formik>
);

export default LoginForm;