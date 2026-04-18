import Button from "./Button";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/navbar/logo.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container d-flex align-items-center justify-content-between">

                {/* LOGO (ESQUERDA) */}
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" height="50" />
                </NavLink>

                {/* BOTÃO (DIREITA - FORA DO COLLAPSE) */}
                <div className="d-block d-lg-none ms-auto">
                    <button className="btn btn-secondary fw-bold text-primary px-3">
                        SOLICITE UM ORÇAMENTO
                    </button>
                </div>

                {/* TOGGLER (MOBILE) */}
                <button
                    className="btn btn-transparent ms-2 border-0 d-block d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <i className="bi bi-list-nested fs-2 text-white"></i>
                </button>

                {/* MENU */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

                    {/* LINKS CENTRALIZADOS */}
                    <div className="navbar-nav text-end">

                        <NavLink to="/" end className={({ isActive }) =>
                            `nav-link fw-semibold ${isActive ? "active" : ""}`
                        }>
                            HOME
                        </NavLink>

                        <NavLink to="/sobre" className={({ isActive }) =>
                            `nav-link fw-semibold ${isActive ? "active" : ""}`
                        }>
                            SOBRE
                        </NavLink>

                        <NavLink to="/servicos" className={({ isActive }) =>
                            `nav-link fw-semibold ${isActive ? "active" : ""}`
                        }>
                            SERVIÇOS
                        </NavLink>

                        <NavLink to="/contatos" className={({ isActive }) =>
                            `nav-link fw-semibold ${isActive ? "active" : ""}`
                        }>
                            CONTATOS
                        </NavLink>

                    </div>
                </div>

                <div className="d-none d-lg-block text-center">
                    <button className="btn btn-secondary fw-bold text-primary px-3">
                        SOLICITE UM ORÇAMENTO
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;