import { ToastContainer } from "react-toastify";
import "./App.css";
import MainRoutes from "./routes";

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

      <MainRoutes />
    </>
  );
}

export default App;
