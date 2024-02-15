import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";
import StoriePage from "../pages/storie";
import SquarePage from "../pages/square";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
      <Route path="/client" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/storie" element={<StoriePage />} />
      <Route path="/square" element={<SquarePage />} />
    </Routes>
  );
};

export default MainRoutes;
