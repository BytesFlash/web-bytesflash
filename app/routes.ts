// routes/index.ts
import { type RouteConfig } from "@react-router/dev/routes";
import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

export default [
    ...publicRoutes,
    ...privateRoutes,
] satisfies RouteConfig;
