const LoginForm = () => {
  return (
    <form>
      <div className="columns is-justify-content-center">
        <div className="column is-one-third">
          <div className="field">
            <label className="label">Имя пользователя</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Введите имя пользователя"
              />
            </div>
            <p className="help is-danger">This is a help text</p>
          </div>
          <div className="field">
            <label className="label">Пароль</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="password"
                placeholder="Введите пароль"
              />
            </div>
            <p className="help is-danger">This is a help text</p>
          </div>
          <div className="field">
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-warning is-rounded is-fullwidth">
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
