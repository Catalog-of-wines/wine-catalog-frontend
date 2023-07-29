import { FC, Fragment } from 'react';
import { Field, Form, Formik } from 'formik';
import { loginUser } from '../../../../../api/login';
import { useAppDispatch } from '../../../../../app/hooks';
import * as authActions from '../../../../../features/auth/authSlice';
import { initialValues, inputsData } from './inputsData';
import { Button } from '../../../../Button';
import { NewUser } from '../../../../../types/User';
import styles from './LoginForm.module.scss';

interface Props {
  onClose: () => void;
}

const LoginForm: FC<Props> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const logIn = async (user: NewUser) => {
    try {
      const response = await loginUser(user);

      dispatch(authActions.addUser(response.data));

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      onSubmit={(values) => logIn({
        name: '',
        email: values.login,
        password: values.password,
        telephone: '',
      })}
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
  )
};

export default LoginForm;