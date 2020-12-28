const Header = () => {
  return (
    <header className="py-4">
      <div className="container is-flex is-justify-content-space-between is-align-items-center px-4">
        <div className="is-flex is-align-items-center">
          <span class="icon is-small mr-1">
            <i class="fas fa-sticky-note"></i>
          </span>
          <div className="title is-6 mb-0">Заметочки</div>
        </div>
        <div className="is-flex">
          <a className="button is-rounded is-warning" href="#">
            Войти
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
