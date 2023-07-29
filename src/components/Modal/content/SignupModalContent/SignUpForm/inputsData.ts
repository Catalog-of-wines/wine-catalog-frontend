export const inputsData = [
  {
    label: 'Ім‘я*',
    name: 'name',
    placeholder: 'Введіть ім‘я',
  },
  {
    label: 'Email*',
    name: 'email',
    placeholder: 'Введіть email',
    type: 'email',
  },
  {
    label: 'Телефон (опціонально)',
    name: 'phone',
    placeholder: 'Введіть телефон',
    type: 'tel',
  },
  {
    label: 'Пароль*',
    name: 'password',
    placeholder: 'Вигадайте надійний пароль',
    type: 'password',
  },
];

export const initialValues = {
  name: '',
  email: '',
  password: '',
  phone: '',
}
