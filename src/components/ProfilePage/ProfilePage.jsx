import React, { useEffect, useState } from "react";
import { getUserProfile, uploadProfileImage } from "../../api/api";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
      } catch (err) {
        console.error("Greška prilikom učitavanja korisnika:", err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageDataUrl = reader.result;
        setSelectedImage(imageDataUrl); // lokalno prikazivanje odmah

        try {
          const updatedUser = await uploadProfileImage(imageDataUrl);
          setUser((prevUser) => ({
            ...prevUser,
            image: updatedUser.image, // ažuriraj user objekt sa backend-a
          }));
        } catch (err) {
          console.error("Greška prilikom slanja slike:", err.message);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) return <div className="profile-page">Učitavanje...</div>;
  if (!user) return <div className="profile-page">Niste prijavljeni.</div>;

  return (
    <div className="profile-page">
      <button className="back-button" onClick={() => navigate("/user/report")}>
        ← Vrati se nazad
      </button>
      <div className="profile-card">
        <h1>Vaš profil</h1>

        <div className="profile-image-wrapper">
          <img
            src={selectedImage || user.image || "/default-avatar.png"}
            alt="Profilna slika"
            className="profile-image"
          />
          <label className="upload-label">
            {selectedImage || user.image ? "Izmeni sliku" : "Dodaj sliku"}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>

        <div className="profile-info">
          <p>
            <strong>Ime:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Delatnost:</strong> {user.delatnost}
          </p>
          <p>
            <strong>Broj izveštaja:</strong> {user.reportCredits || 0}
          </p>
          <p>
            <strong>Pretplata:</strong> {user.subscription || "Nema pretplatu"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
