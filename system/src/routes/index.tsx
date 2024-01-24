import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
      <Route path="/client" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoutes;
