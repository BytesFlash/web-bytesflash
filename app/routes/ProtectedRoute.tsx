import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";
import type { JSX } from "react";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { token } = useAuth();

  if (!token) return <Navigate to="/login" />;
  return children;
}