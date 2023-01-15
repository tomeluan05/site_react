import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="imagem_logo" src="/logo-marca.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                {/* <Link to="/about" class="nav-link active">
                  About
                </Link> */}
                <a href="#" class="nav-link active">About</a>
              </li>
              <li class="nav-item">
              {/* <Link to="/contato" class="nav-link active">
                  Contato
                </Link> */}
                <a href="#" class="nav-link active">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
