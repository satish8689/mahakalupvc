import { useState } from "react";

const Header = ({ setActiveSection }) => {
  const [isClickOn, setClickOn ] = useState(false)
  return (
    <section className="head-section">
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light penguin-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={"/logo.png"}
                alt="Logo"
                className="penguin-logo img-fluid-logo"
              />
            </a>
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
            {/* <div class="search-box">
              <input type="text" placeholder="Search" />
              <div class="icons">
                <i class="fa fa-search"></i>
              </div>
            </div> */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item" onClick={() => setActiveSection("home")}>
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item" onClick={() => setActiveSection("about")}>
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
               
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Products
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Policies
                  </a>
                </li> */}
                <li className="nav-item" onClick={() => setActiveSection("contactus")}>
                  <a className="nav-link" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Header;
