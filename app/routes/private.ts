import { route } from "@react-router/dev/routes";

export default [
  // Este es el layout protegido
  route(null, "routes/admin/PrivateLayout.tsx", [
    // Hijas protegidas
    route("dashboard", "routes/admin/dashboard.tsx"),
  ]),
];