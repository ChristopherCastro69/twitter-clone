import "./App.css";
import { SessionProvider } from "./context/SessionContext";
import Router from "./routes/router";

function App() {
  return (
    <SessionProvider>
      <Router />
    </SessionProvider>
  );
}

export default App;
