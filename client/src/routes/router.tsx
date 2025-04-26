import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageUrl } from "../constants/pages.constants";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
const router = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageUrl.LOGIN} element={<Login />} />
        <Route path={PageUrl.HOME} element={<Home />} />
        <Route path={PageUrl.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
});

export default router;
