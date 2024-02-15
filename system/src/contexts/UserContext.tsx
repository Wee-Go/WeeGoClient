import { createContext, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";
import { User } from "firebase/auth";

interface iUserProviderProps {
  children: ReactNode;
}

interface iUserValues {
  user: User | null | undefined;
}

export const AuthContext = createContext<iUserValues>({} as iUserValues);

function AuthProvider({ children }: iUserProviderProps) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/login");
      }
      if (error) {
        console.log(error);
      }
    }
  }, [user, loading]);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
