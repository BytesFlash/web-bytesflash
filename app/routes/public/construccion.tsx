import { FaTools } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0e0f11] text-white">
            <FaTools className="text-6xl mb-6 text-yellow-400 animate-bounce" />
            <h1 className="text-3xl font-bold mb-2">¡En construcción!</h1>
            <p className="text-lg text-white/70 mb-6">
                Estamos trabajando para traerte esta página pronto.
            </p>
            <a
                href="/"
                className="btn btn-primary bg-[#2563eb] hover:bg-[#1e40af] text-white px-6"
            >
                Volver al inicio
            </a>
        </div>
    );
}