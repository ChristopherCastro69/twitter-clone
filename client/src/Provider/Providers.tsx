import { ReactNode } from "react";
import { SessionProvider } from "../context/SessionContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children} {/* Render children directly */}
    </SessionProvider>
  );
};

export default Providers;