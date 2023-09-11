import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/styles.css";
import "./assets/style/responsive.css";
import Login from "./pages/Login/Login";
import Otp from "./pages/OtpPage/Otp";

function App() {
  return (
    <div className="full-height">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
