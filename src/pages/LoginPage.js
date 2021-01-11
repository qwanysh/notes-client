import LoginForm from '../containers/LoginForm';

const LoginPage = () => {
  return (
    <section className="hero">
      <div className="hero-body px-0">
        <div className="container is-flex is-flex-direction-column px-4">
          <h1 className="title has-text-centered">Войти</h1>
          <h2 className="subtitle has-text-centered">
            Войдите, чтобы иметь доступ к заметкам
          </h2>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
