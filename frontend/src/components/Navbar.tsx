import {ReactComponent as GitHubIcon} from "assets/img/github.svg";
import "./Navbar.styles.css";

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Filmes</h1>
                    <a href="https://github.com/pedrojunior079">
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/pedrojunior079</p>
                        </div>

                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;