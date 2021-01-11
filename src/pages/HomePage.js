import { Link } from 'react-router-dom';
import PromoImage from '../assets/promo.svg';

const HomePage = () => {
  return (
    <div className="container px-3">
      <div className="columns is-vcentered">
        <section className="section column is-flex is-flex-direction-column">
          <h1 className="title has-text-centered">Привет, я Куаныш</h1>
          <h2 className="subtitle has-text-centered">
            Добро пожаловать в место, где я храню заметки
          </h2>
          <Link
            className="button is-text is-rounded is-align-self-center"
            to="/notes"
          >
            Перейти к списку заметок
            <span className="icon is-small ml-1">
              <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        </section>
        <section className="section column is-three-fifths">
          <img className="is-block mx-auto" src={PromoImage} alt="qwanysh" />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
