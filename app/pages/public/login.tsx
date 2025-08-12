import React, { useState } from 'react';
import { SecurityServicesProvider } from '../../services';
import { useNavigate } from 'react-router';
import { useAuth } from '~/context/authContext';




export default function Login() {
    const securityService = new SecurityServicesProvider();
    const { login, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await securityService.sendLoginRequest(email, password);

            if (result.token) {
                login(result.token); // esto guarda en localStorage y actualiza el contexto

                const resUser = await securityService.getUsersEmail(email, result.token);
                setUser(resUser); // esto actualiza el usuario global en el contexto

                navigate("/dashboard"); // redirigís si todo salió bien
            } else {
                setErrorMessage(result.details || 'Login fallido');
            }
        } catch (error) {
            setErrorMessage('Error al iniciar sesión');
            console.error(error);
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="relative w-full max-w-md px-6 py-10 rounded-3xl bg-white shadow-xl overflow-hidden">
                {/* Fondo SVG ajustado */}
                <div className="absolute left-0 w-full h-full z-10">
                    <svg viewBox="0 0 440 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2_266" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="-203" y="0" width="871" height="871">
                            <path d="M232.5 871C473.02 871 668 676.02 668 435.5C668 194.98 473.02 0 232.5 0C-8.01999 0 -203 194.98 -203 435.5C-203 676.02 -8.01999 871 232.5 871Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_2_266)">
                            <path d="M1520.63 141.721C1314.75 141.721 1314.75 469.06 1108.9 469.06C903.028 469.06 903.028 141.721 697.176 141.721C491.347 141.721 491.347 365.968 285.518 365.968C79.6666 365.968 79.6666 64.3963 -126.163 64.3963C-331.992 64.3963 -331.992 288.644 -537.821 288.644C-743.673 288.644 -743.673 38.6068 -949.502 38.6068V517.451H1520.63V141.721Z" fill="url(#paint0_linear_2_266)" />
                            <path d="M1520.63 643.366C1383.38 643.366 1383.38 316.027 1246.13 316.027C1108.88 316.027 1108.88 514.507 971.631 514.507C834.404 514.507 834.404 316.027 697.155 316.027C559.906 316.027 559.906 462.95 422.679 462.95C285.452 462.95 285.452 187.146 148.225 187.146C10.9982 187.146 10.9982 437.16 -126.229 437.16C-263.433 437.16 -263.433 316.005 -400.66 316.005C-537.865 316.005 -537.865 462.928 -675.07 462.928C-812.275 462.928 -812.275 316.005 -949.457 316.005V923.708H1520.67V643.366" fill="url(#paint1_linear_2_266)" />
                            <path d="M1520.63 469.06C1314.75 469.06 1314.75 796.399 1108.9 796.399C903.028 796.399 903.028 469.06 697.177 469.06C491.348 469.06 491.348 796.399 285.518 796.399C79.6671 796.399 79.6671 623.708 -126.162 623.708C-331.992 623.708 -331.992 796.399 -537.821 796.399C-743.672 796.421 -743.672 469.06 -949.501 469.06V923.708H1520.63V469.06Z" fill="url(#paint2_linear_2_266)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_2_266" x1="291.078" y1="145.61" x2="286.826" y2="247.644" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D0E1FF" />
                                <stop offset="1" stop-color="#00C7FF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2_266" x1="340.59" y1="368.788" x2="278.238" y2="653.27" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF83E2" />
                                <stop offset="1" stop-color="#FF48CC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_2_266" x1="311.041" y1="607.956" x2="244.791" y2="837.88" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9354F7" />
                                <stop offset="1" stop-color="#7A2FE0" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>

                <div className="flex flex-col items-center gap-7 relative z-10">
                    <img src="/logo.svg" alt="Logo" className="w-20 h-20 mb-2" />
                    <h2 className="text-2xl  text-center">
                        Iniciar <span className="text-cyan-300 font-medium">Sesión</span>
                    </h2>

                    <input
                        type="email"
                        placeholder="Email *"
                        className="input input-bordered w-80 top-3 rounded-full text-black px-5 py-3 text-base"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña *"
                        className="input input-bordered w-80 mt-2 mb-2 rounded-full text-black px-5 py-3 text-base"
                    />

                    <div className="form-control w-full">
                        <label className="label cursor-pointer justify-start gap-2">
                            <input type="checkbox" className="checkbox-info checkbox-sm" />
                            <span className="label-text text-white">Recuérdame</span>
                        </label>
                    </div>

                    <a href="#" className="text-sm text-white text-colo underline font-semibold">¿Olvidaste tu contraseña?</a>

                    <button className="btn btn-outline w-56 rounded-full font-bold text-white border-white mt-2 md:mt-4 lg:mt-6">
                        INICIAR SESIÓN
                    </button>

                    <p className="text-sm mt-2 md:mt-4 lg:mt-6 text-white">
                        ¿Eres nuevo?{' '}
                        <a href="#" className="font-semibold underline text-white">Regístrate</a>
                    </p>


                    <p className="font-semibold mt-2 text-white">ACCESO RÁPIDO CON</p>

                    <div className="flex justify-center gap-5">

                        <button className="btn w-12 h-12 btn-square bg-transparent">
                            <img src="/google.svg" alt="Google" className="w-7 h-7" />
                        </button>
                        <button className="btn w-12 h-12 btn-square bg-transparent">
                            <img src="/facebook.svg" alt="Facebook" className="w-7 h-7" />
                        </button>
                        <button className="btn w-12 h-12 btn-square bg-transparent">
                            <img src="/apple.svg" alt="Apple" className="w-7 h-7" />
                        </button>
                        <br />
                        <br />
                        <br />
                        <br />

                    </div>
                </div>
            </div>
        </div >
        /* <div className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-base-100 shadow-2xl">
                <div className="h-64 md:h-auto">
                    <img
                        src="public/home/obrero.png"
                        alt="Montaña"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                        Login to your account
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {errorMessage && (
                            <div className="text-error text-sm mb-4">{errorMessage}</div>
                        )}

                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>

                        <button type="button" className="btn btn-outline btn-primary w-full mt-3">
                            Login with Google
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <a href="#" className="link link-primary">Signup new account</a>
                    </div>
                </div>
            </div>
        </div> */
    );
}
