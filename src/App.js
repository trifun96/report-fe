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
      </Routes>
      <ReportDisplay
        report={report}
        patientData={patientData}
        email={email}
        clearReport={clearReport}
      />
    </div>
  );
}

export default App;
