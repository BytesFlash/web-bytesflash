// src/auth.ts

export function setToken(token: string) {
    localStorage.setItem("token", token);
}

export function getToken(): string | null {
    return localStorage.getItem("token");
}

export function removeToken() {
    localStorage.removeItem("token");
}

// Supongamos que guardas el rol en el token o lo recibes tras el login.
// Para simplificar, lo haremos con un localStorage extra.
export function setUserRole(role: string) {
    localStorage.setItem("userRole", role);
}

export function getUserRole(): string | null {
    return localStorage.getItem("userRole");
}

// Ejemplo de verificación de token (podrías decodificar JWT, etc.)
export function isTokenValid(token: string | null): boolean {
    // Aquí podrías verificar expiración o firma del token
    return !!token; // Simplificado: si existe, lo consideramos válido
}
