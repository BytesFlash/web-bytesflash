// routes/public.ts
import { route, index } from "@react-router/dev/routes";

export default [
    index("pages/public/home.tsx"),
    route("login", "pages/public/login.tsx"),
    route("about", "pages/public/about.tsx"),
    route("construccion", "pages/public/construccion.tsx"),
    route("contenido", "pages/public/Contents/ContentList.tsx"),
    route("contenido/:id", "pages/public/Contents/Content.tsx"),
    route("*", "pages/public/NotFound.tsx"),
    route("create-post", "pages/admin/CreatePost.tsx"),
];

