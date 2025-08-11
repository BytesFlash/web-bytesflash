// routes/index.ts
import { type RouteConfig } from "@react-router/dev/routes";
import publicRoutes from "./pages/public";
import privateRoutes from "./pages/private";

export default [
    ...publicRoutes,
    ...privateRoutes,
] satisfies RouteConfig;
