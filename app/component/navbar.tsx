import { useNavigate } from "react-router";
import { useAuth } from "~/context/authContext";

const Navbar = () => {
    const { token, logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="navbar bg-base-100 shadow-md">
            {/* Sección izquierda: Logo y menú para móviles */}
            <div className="navbar-start">
                <div className="dropdown">
                    {/* Botón hamburguesa visible solo en móviles */}
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    {/* Menú desplegable para móviles */}
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a href="/about">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Servicios</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                {/* Logo o nombre de la app */}
                <a className="btn btn-ghost normal-case text-xl" href="/">
                    DigiFlow
                </a>
            </div>

            {/* Sección central: Menú horizontal visible en pantallas grandes */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <a href="/about">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Servicios</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>

            {/* Sección derecha: Botón de Login */}
            <div className="navbar-end">
                {token ? (
                    <button className="btn btn-secondary" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <a href="/login" className="btn btn-primary">
                        Login
                    </a>
                )}
            </div>
        </div>
    );
};

export default Navbar;