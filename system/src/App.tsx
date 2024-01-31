import { ToastContainer } from "react-toastify";
import "./App.css";
import MainRoutes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
