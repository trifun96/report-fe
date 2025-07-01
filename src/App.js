import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import AuthForm from "./components/LoginForm/LoginForm";
import ReportComponent from "./components/ReportComponent/ReportComponent";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

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
      </Routes>
    </div>
  );
}

export default App;
