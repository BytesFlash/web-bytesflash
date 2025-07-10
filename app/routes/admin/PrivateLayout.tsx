import {
    Navigate,
    Outlet,
} from "react-router";
import { useAuth } from "~/context/authContext";

export default function PrivateLayout() {
    const { token } = useAuth();
    if (!token) return <Navigate to="/login" />;
    return <Outlet />;
}