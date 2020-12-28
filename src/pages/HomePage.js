import PromoImage from '../assets/promo.svg';

const HomePage = () => {
  return (
    <section className="hero">
      <div className="hero-body px-0">
        <div className="container is-flex is-flex-direction-column px-4">
          <h1 className="title has-text-centered">Привет, я Куаныш</h1>
          <h2 className="subtitle has-text-centered">
            Добро пожаловать в место, где я храню свои заметочки
          </h2>
          <img
            className="is-block mx-auto mb-5"
            src={PromoImage}
            alt="qwanysh"
          />
          <a
            className="button is-text is-rounded is-align-self-center"
            href="#"
          >
            Перейти к списку заметочек
            <span className="icon is-small ml-1">
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
