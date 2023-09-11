import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/styles.scss";
import "./assets/style/responsive.scss";
import Login from "./pages/login/login";
import Otp from "./pages/otpPage/otp";

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
