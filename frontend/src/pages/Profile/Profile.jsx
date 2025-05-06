import React, { useState } from 'react';
import './Profile.css';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaSignOutAlt,
  FaUserShield,
} from 'react-icons/fa';

const Profile = () => {
  const isAdmin = true;

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '081234567890',
    address: 'Jl. Mawar No. 8, Bandung',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = () => {
    console.log('Data tersimpan:', profile);
    setIsEditing(false);
  };

  const handleLogout = () => alert('Logout berhasil!');
  const goToAdminPanel = () => alert('Masuk ke Admin Panel');

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe&background=FF5722&color=fff"
            alt="Avatar"
            className="profile-avatar"
          />
          <div className="profile-info">
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            {!isEditing && (
              <button className="btn edit" onClick={handleEdit}>
                <FaEdit /> Edit Profil
              </button>
            )}
          </div>
        </div>

        <div className="profile-body">
          <div className="profile-field">
            <label><FaUser /> Nama</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label><FaEnvelope /> Email</label>
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label><FaPhone /> No. Telepon</label>
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label><FaMapMarkerAlt /> Alamat</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              disabled={!isEditing}
              rows={3}
            />
          </div>

          {isEditing && (
            <div className="button-group">
              <button className="btn save" onClick={handleSave}>Simpan</button>
              <button className="btn cancel" onClick={handleCancel}>Batal</button>
            </div>
          )}

          <div className="action-buttons">
            {isAdmin && (
              <button className="btn admin" onClick={goToAdminPanel}>
                <FaUserShield /> Admin Panel
              </button>
            )}
            <button className="btn logout" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
