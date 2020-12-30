import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4">
      <div className="container is-flex is-justify-content-space-between is-align-items-center px-4">
        <Link
          className="button is-white is-rounded is-flex is-align-items-center"
          to="/"
        >
          <span className="icon is-small mr-1 has-text-dark">
            <i className="fas fa-sticky-note" />
          </span>
          <div className="title is-6 mb-0">Заметочки</div>
        </Link>
        <div className="is-flex">
          <Link className="button is-rounded is-warning" to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
