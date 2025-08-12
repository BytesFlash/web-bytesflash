import { useParams } from "react-router-dom";
import contents from "../../../data/contents.json";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ContentPage() {
    const { id } = useParams();
    const content = contents.find((item) => String(item.id) === id);
    const [html, setHtml] = useState("");
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
            navigate("/contenido", { replace: true });
        }
    };

    useEffect(() => {
        if (!content) return;

        // respetar \n como <br>
        marked.setOptions({ gfm: true, breaks: true });

        try {
            const rawHtml = marked.parse(content.body ?? "");
            const sanitized = DOMPurify.sanitize(rawHtml as any, {
                // deja pasar clases/atributos que necesitamos
                ADD_TAGS: ["iframe", "figure", "figcaption"],
                ADD_ATTR: ["class", "width", "height", "loading", "srcdoc"],
            });
            setHtml(sanitized);
        } catch (err) {
            setHtml("<p>Error al renderizar el contenido.</p>");
            console.error("Error al procesar Markdown:", err);
        }
    }, [content]);

    if (!content) return <p className="text-white">Contenido no encontrado.</p>;

    return (

        <section className="max-w-4xl mx-auto px-4 py-10 text-white">

            <div className="not-prose mb-4 flex items-center gap-2">
                <button onClick={handleBack} className="btn btn-ghost btn-sm">
                    ← Volver
                </button>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contenido">Contenido</a></li>
                        <li className="truncate max-w-[50vw]">{content.title}</li>
                    </ul>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
            <p className="text-gray-400 mb-6">{content.subtitle}</p>

            <img
                src={content.image}
                alt={content.title}
                className="w-full h-64 object-cover rounded mb-6"
            />

            <article
                className="
          prose prose-invert max-w-none
          /* código largo: scroll y estilo DaisyUI */
          prose-pre:bg-base-200 prose-pre:text-base-content
          whitespace-pre-line  
          prose-pre:rounded-xl prose-pre:p-4
          prose-pre:overflow-x-auto prose-pre:max-w-full
          prose-code:bg-base-200 prose-code:px-1.5 prose-code:rounded
          /* imágenes con aire */
          prose-img:my-6
        "
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </section>
    );
}
