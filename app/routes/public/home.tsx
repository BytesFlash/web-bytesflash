import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Sección Hero */}
      <div className="hero bg-base-100 py-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="public/home/obrero.png"
            className="max-w-sm rounded-lg"
            alt="Ilustración trabajador Digiflow"
          />
          <div>
            <h1 className="text-5xl font-bold">Bienvenido a DigiFlow</h1>
            <p className="py-6">
              Centraliza la gestión de tus servicios. Resuelve
              incidencias y administra tus servicios de forma eficiente y transparente
              para tus clientes, con nuestras solucion tecnológicas.
            </p>
            <button className="btn btn-primary">Comienza ahora</button>
          </div>
        </div>
      </div>

      {/* Sección de Estadísticas */}
      <div className="container mx-auto p-6">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              {/* Icono tecnológico */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </div>
            <div className="stat-title">Tickets Totales</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">+45% este mes</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="stat-title">Tickets Abiertos</div>
            <div className="stat-value">300</div>
            <div className="stat-desc">20 pendientes</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01"
                />
              </svg>
            </div>
            <div className="stat-title">Tickets Cerrados</div>
            <div className="stat-value">900</div>
            <div className="stat-desc">Resolución efectiva</div>
          </div>
        </div>
      </div>

      {/* Sección de Tickets Recientes */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Tickets Recientes</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Tipo</th>
                <th>Estado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Juan Pérez</td>
                <td>Software</td>
                <td>
                  <span className="badge badge-success">Cerrado</span>
                </td>
                <td>12/03/2025</td>
              </tr>
              <tr>
                <td>002</td>
                <td>María López</td>
                <td>Hardware</td>
                <td>
                  <span className="badge badge-warning">Abierto</span>
                </td>
                <td>13/03/2025</td>
              </tr>
              <tr>
                <td>003</td>
                <td>Carlos Ruiz</td>
                <td>Redes</td>
                <td>
                  <span className="badge badge-error">Crítico</span>
                </td>
                <td>14/03/2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
