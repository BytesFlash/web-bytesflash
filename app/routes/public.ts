// routes/public.ts
import { route, index } from "@react-router/dev/routes";

export default [
    index("routes/public/home.tsx"),
    route("login", "routes/public/login.tsx"),
    route("about", "routes/public/about.tsx"),
];
