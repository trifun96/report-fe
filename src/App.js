import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import AuthForm from './components/LoginForm/LoginForm';
import ReportComponent from './components/ReportComponent/ReportComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthForm mode="login" />} />
        <Route path="/signup" element={<AuthForm mode="signup" />} />
            <Route path="/user/report" element={<ReportComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
