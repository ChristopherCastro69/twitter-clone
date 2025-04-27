import NotFoundPage from "../pages/404Page";
import { useSession } from "../context/SessionContext";
import { ReactNode } from "react";

interface AuthProtectedRouteProps {
  children: ReactNode;
}

const AuthProtectedRoute: React.FC<AuthProtectedRouteProps> = ({
  children,
}) => {
  const { session } = useSession();
  if (!session) {
    // or you can redirect to a different page and show a message
    return <NotFoundPage />;
  }
  return <>{children}</>;
};

export default AuthProtectedRoute;
