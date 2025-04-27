import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PageUrl } from "../constants/pages.constants";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/404Page";
import AuthProtectedRoute from "./AuthProtectedRoute";
import Providers from "../Provider/Providers";
import AuthRedirect from "./AuthRedirect";

const router = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PageUrl.LOGIN} />} />
        <Route
          path={PageUrl.LOGIN}
          element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          }
        />
        <Route
          path={PageUrl.REGISTER}
          element={
            <AuthRedirect>
              <Register />
            </AuthRedirect>
          }
        />
        <Route
          path={PageUrl.HOME}
          element={
            <Providers>
              <AuthProtectedRoute>
                <Home />
              </AuthProtectedRoute>
            </Providers>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
});

export default router;
