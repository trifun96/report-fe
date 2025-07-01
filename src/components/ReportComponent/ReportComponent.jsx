import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/api";
import Header from '../Header/Header';

const ReportComponent = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // ili kako si ti nazvao ključ
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // pretvori string u objekat
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
     localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <Header user={user} onLogout={handleLogout} />
      <h2>Ovo je moj izveštaj</h2>
      <p>Ovde možeš prikazati podatke iz generisanog izveštaja.</p>
    </div>
  );
};

export default ReportComponent;
