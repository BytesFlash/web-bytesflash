import { Navigate } from "react-router";
import contents from "../../../data/contents.json";
import { Link } from "react-router-dom";

import { useNavigate, useLocation } from "react-router-dom";
export default function ContentList() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        const from = (location.state as any)?.from as string | undefined;

        if (from) {
            // si te pasaron de dónde venías, vuelve ahí
            navigate(from, { replace: true });
        } else if (window.history.length > 1 && document.referrer) {
            // si hay historial en este tab, vuelve normalmente
            navigate(-1);
        } else {
            // fallback genérico (ajústalo a tu ruta de listado)
            navigate("/", { replace: true });
        }
    };


    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            <div className="not-prose mb-4 flex items-center gap-2">
                <button onClick={handleBack} className="btn btn-ghost btn-sm">
                    ← Volver
                </button>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li className="truncate max-w-[50vw]">Contenido</li>
                    </ul>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-white mb-6">Contenido</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contents.map((item) => (
                    <Link to={`/contenido/${item.id}`} key={item.id}>
                        <article className="bg-[#0f172a] border border-[#1e293b] rounded-lg overflow-hidden hover:scale-[1.02] transition">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4 text-white">
                                <h2 className="text-md font-semibold leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>
                                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                                    {item.body}
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0ea5e9] text-white capitalize">
                                        {item.type}
                                    </span>
                                    <span className="text-xs text-gray-400">{item.time}</span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
