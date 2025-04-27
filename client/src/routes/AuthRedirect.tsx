import { useSession } from "../context/SessionContext";
import { Navigate } from "react-router-dom";
import { PageUrl } from "../constants/pages.constants";

const AuthRedirect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session } = useSession();

  if (session) {
    return <Navigate to={PageUrl.HOME} />; // Redirect to home if authenticated
  }

  return <>{children}</>; // Render children if not authenticated
};

export default AuthRedirect;