import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "~/context/authContext";
import {
    FaBookOpen,
    FaCrown,
    FaShareAlt,
    FaLayerGroup,
    FaUser,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Navbar = () => {
    const { token, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="relative z-50">
            <div
                className="navbar px-4 md:px-10 py-4 text-white"
                style={{
                    background: "linear-gradient(to right, #000000 60%, #0f172a 100%)",
                }}
            >
                {/* Logo */}
                <div className="navbar-start">
                    <a
                        href="/"
                        className="flex items-center gap-2"
                        style={{ height: "2rem" }} // Mantiene la altura del navbar
                    >
                        <div
                            style={{
                                width: "4rem",
                                height: "4rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                marginTop: "-1rem", // Hace que el logo sobresalga por arriba
                                marginBottom: "-1rem", // y por abajo, sin agrandar el navbar
                            }}
                        >
                            <img
                                src="logo/logo-bg.png"
                                alt="Logo Bytesflash"
                                className="w-full h-full rounded-full bg-white object-contain shadow-lg"
                                style={{
                                    backgroundColor: "#000000",
                                }}
                            />
                        </div>
                    </a>
                </div>

                {/* Menú horizontal para desktop */}
                <div className="hidden lg:flex gap-8 text-sm font-medium text-white/90 navbar-center">
                    <a href="/construccion" className="flex items-center gap-2"><FaLayerGroup /> Contenido</a>
                    <a href="/construccion" className="flex items-center gap-2"><FaBookOpen /> Asesorías</a>
                    <a href="/construccion" className="flex items-center gap-2"><FaCrown /> PRO</a>
                    <a href="/construccion" className="flex items-center gap-2"><FaShareAlt /> Redes</a>
                </div>

                {/* Derecha: buscador + login + hamburguesa */}
                <div className="navbar-end gap-3">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-sm bg-[#0d1117] text-white placeholder:text-white/40 border border-white/10 hidden md:block"
                    />
                    {token ? (
                        <button className="btn btn-sm btn-error" onClick={handleLogout}>Salir</button>
                    ) : (
                        <a href="/construccion" className="btn btn-sm text-white bg-[#2563eb] hover:bg-[#1e40af] border-none flex items-center gap-2">
                            <FaUser /> Comenzar
                        </a>
                    )}

                    {/* Botón hamburguesa a la derecha en móvil */}
                    <button
                        className="lg:hidden btn btn-ghost btn-sm"
                        onClick={() => setMenuOpen(true)}
                    >
                        <FaBars className="text-lg" />
                    </button>
                </div>
            </div>

            {/* Drawer lateral animado */}
            <div
                className={`fixed top-0 right-0 h-full w-64 z-[100] bg-[#0e0f11] border-l border-white/10 shadow-xl transform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{
                    backgroundImage: "linear-gradient(to top, #1e40af33, #0e0f11 80%)",
                }}
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => setMenuOpen(false)} className="text-white text-xl">
                        <FaTimes />
                    </button>
                </div>
                <ul className="flex flex-col gap-6 px-6 py-4 text-white text-md">
                    <li><a href="/construccion" className="flex items-center gap-3"><FaLayerGroup /> Contenido</a></li>
                    <li><a href="/construccion" className="flex items-center gap-3"><FaBookOpen /> Asesorías</a></li>
                    <li><a href="/construccion" className="flex items-center gap-3"><FaCrown /> PRO</a></li>
                    <li><a href="/construccion" className="flex items-center gap-3"><FaShareAlt /> Redes</a></li>
                </ul>
                <div className="mt-auto px-6 py-4">
                    {token ? (
                        <button className="btn btn-error w-full" onClick={handleLogout}>Cerrar sesión</button>
                    ) : (
                        <a href="/construccion" className="btn btn-primary w-full">Comenzar</a>
                    )}
                </div>
            </div>

            {/* Fondo oscuro detrás del drawer */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Navbar;
