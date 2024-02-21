import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
      <Route path="/client" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default MainRoutes;
