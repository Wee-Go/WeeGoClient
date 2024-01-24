import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import ChoicePage from "../pages/choice";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
      <Route path="/client" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/choice" element={<ChoicePage />} />
    </Routes>
  );
};

export default MainRoutes;
