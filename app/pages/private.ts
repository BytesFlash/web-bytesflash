import { route } from "@react-router/dev/routes";

export default [
  // Este es el layout protegido
  route(null, "pages/admin/PrivateLayout.tsx", [
    // Hijas protegidas
    route("dashboard", "pages/admin/dashboard.tsx"),
  ]),
];