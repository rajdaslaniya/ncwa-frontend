import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/styles.scss";
import "./assets/style/responsive.scss";
import Login from "./pages/login/login";
import Otp from "./pages/otpPage/otp";
import Registration from "./pages/registration/registration";
import CourseDetails from "./pages/course-details/course-details";
import ProtectedRoute from "./guards/ProtectedRoute";
import IsOtpVerified from "./guards/isOtpVerified";
import InstructorAssessment from "./pages/instructor-assesment/InstructorAssessment";

function App() {
  return (
    <div className="full-height">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route
            path="/registration"
            element={
              <IsOtpVerified>
                <Registration />
              </IsOtpVerified>
            }
          />
          <Route
            path="/course-details"
            element={
              <ProtectedRoute>
                <CourseDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessment"
            element={
              <ProtectedRoute>
                <InstructorAssessment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
