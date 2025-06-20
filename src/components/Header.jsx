import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark-subtle">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/movies/">
            CINEBLOG BOOLEAN
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/movies/"
                >
                  Lista dei film
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
