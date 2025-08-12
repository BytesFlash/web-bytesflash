import { useState } from "react";

export default function CreatePost() {
    const [form, setForm] = useState({
        id: Date.now().toString(),
        title: "",
        subtitle: "",
        type: "summary",
        time: "hoy",
        image: "",
        body: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const generatedJson = JSON.stringify(form, null, 2);

    const validateBody = (body: string) => {
        const prohibited = ["<Meta", "<meta", "<Head", "<Component"];
        return !prohibited.some((tag) => body.includes(tag));
    };

    const copyToClipboard = () => {
        if (!validateBody(form.body)) {
            alert("El contenido contiene etiquetas no compatibles (<Meta>, <Head>, etc).");
            return;
        }

        navigator.clipboard.writeText(JSON.stringify(form, null, 2));
        alert("JSON copiado al portapapeles");
    };

    return (
        <div className="max-w-4xl mx-auto p-6 text-white">
            <h1 className="text-2xl font-bold mb-4">Crear nueva publicación</h1>

            <div className="grid gap-4">
                <input
                    name="title"
                    placeholder="Título"
                    className="p-2 rounded bg-gray-800 border border-gray-700"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    name="subtitle"
                    placeholder="Subtítulo"
                    className="p-2 rounded bg-gray-800 border border-gray-700"
                    value={form.subtitle}
                    onChange={handleChange}
                />
                <input
                    name="type"
                    placeholder="Tipo (summary, tutorial, articulo)"
                    className="p-2 rounded bg-gray-800 border border-gray-700"
                    value={form.type}
                    onChange={handleChange}
                />
                <input
                    name="image"
                    placeholder="Imagen de portada (/images/ejemplo.png)"
                    className="p-2 rounded bg-gray-800 border border-gray-700"
                    value={form.image}
                    onChange={handleChange}
                />
                <textarea
                    name="body"
                    placeholder="Contenido del artículo. Puedes usar Markdown o HTML: \n\n<h2 class='text-red-500'>Título rojo</h2> o ![alt](ruta.jpg)"
                    rows={12}
                    className="p-2 rounded bg-gray-800 border border-gray-700 font-mono text-sm whitespace-pre-wrap"
                    value={form.body}
                    onChange={handleChange}
                />
            </div>

            <button
                onClick={copyToClipboard}
                className="mt-6 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
                Copiar JSON generado
            </button>

            <h2 className="text-xl mt-10 font-semibold mb-2">Vista previa del JSON</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto text-sm">
                {generatedJson}
            </pre>
        </div>
    );
}
