import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";

export function useAuthUser() {
  const { isAuthenticated, login, logout } = useAuth();
  const { user, setUser } = useUser();

  return { isAuthenticated, login, logout, user, setUser };
}