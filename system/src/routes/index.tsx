import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import ChoicePage from "../pages/choice";
import CupomPage from "../pages/cupom";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
      <Route path="/client" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/choice" element={<ChoicePage />} />
      <Route path="/cupom" element={<CupomPage />} />
    </Routes>
  );
};

export default MainRoutes;
