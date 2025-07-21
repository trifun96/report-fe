import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import AuthForm from "./components/LoginForm/LoginForm";
import ReportComponent from "./components/ReportComponent/ReportComponent";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ReportDisplay from "./components/ReportDisplay/ReportDisplay";
import Footer from "./components/FooterPage/FooterPage";
import ContactForm from "./components/ContactPage/ContactForm";
import PricingPlans from "./components/PricingPlan/PricingPlan";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { ToastContainer } from "react-toastify";

function App() {
  const [report, setReport] = useState("");
  const [email, setEmail] = useState("");
  const [patientData, setPatientData] = useState({});

  const clearReport = () => {
    setReport("");
  };

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
              <ReportComponent
                onGenerateReport={setReport}
                onEmailChange={setEmail}
                onPatientDataFilled={setPatientData}
              />
            </PrivateRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/subscribe" element={<PricingPlans />} />
        <Route path="/profil" element={<ProfilePage/>} />
      </Routes>
      <ReportDisplay
        report={report}
        patientData={patientData}
        email={email}
        clearReport={clearReport}
      />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
