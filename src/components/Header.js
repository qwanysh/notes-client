const Header = () => {
  return (
    <header className="py-4">
      <div className="container is-flex is-justify-content-space-between is-align-items-center px-4">
        <div className="title has-text-dark is-6 mb-0">qwanysh's notes</div>
        <div className="is-flex">
          <a className="button is-rounded is-warning" href="test">
            sign in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
