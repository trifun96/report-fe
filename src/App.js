import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landingpage/LandingPage";
import AuthForm from "./components/LoginForm/LoginForm";
import ReportComponent from "./components/ReportComponent/ReportComponent";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <AuthForm mode="login" />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <AuthForm mode="signup" />
            </PublicRoute>
          }
        />
        <Route
          path="/user/report"
          element={
            <PrivateRoute>
              <ReportComponent />
            </PrivateRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
