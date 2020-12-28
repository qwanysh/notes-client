import { useFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Введите имя пользователя'),
      password: Yup.string().required('Введите пароль'),
    }),
    onSubmit(values, { setSubmitting }) {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 3000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="columns is-justify-content-center">
        <div className="column is-one-third">
          <div className="field">
            <label className="label">Имя пользователя</label>
            <div className="control">
              <input
                className={classnames('input', 'is-rounded', {
                  'is-danger':
                    formik.touched.username && formik.errors.username,
                })}
                type="text"
                name="username"
                placeholder="Введите имя пользователя"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.username && formik.errors.username && (
              <p className="help is-danger">{formik.errors.username}</p>
            )}
          </div>
          <div className="field">
            <label className="label">Пароль</label>
            <div className="control">
              <input
                className={classnames('input', 'is-rounded', {
                  'is-danger':
                    formik.touched.password && formik.errors.password,
                })}
                type="password"
                name="password"
                placeholder="Введите пароль"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="help is-danger">{formik.errors.password}</p>
            )}
          </div>
          <div className="field">
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button
                    className={classnames(
                      'button',
                      'is-warning',
                      'is-rounded',
                      'is-fullwidth',
                      {
                        'is-loading': formik.isSubmitting,
                      }
                    )}
                    type="submit"
                  >
                    Войти
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
