import { ToastContainer } from "react-toastify";
import "./App.css";
import MainRoutes from "./routes";
import "react-toastify/dist/ReactToastify.css";

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
