import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import logo from '../assets/img.png';
import '../hook/Login.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'super@esi.com') {
      navigate('/dashboard/superadmin');
    } else if (email === 'admin@esi.com') {
      navigate('/dashboard/admin');
    } else if (email === 'store@esi.com') {
      navigate('/dashboard/storekeeper');
    } else {
      navigate('/dashboard/student');
    }
  };

  return (
    <div className="login-page-v3">
      <div className="login-topbar">
        <ThemeToggle />
      </div>

      <div className="login-content">
        <div className="login-brand">
          <img src={logo} alt="ESI-GM" className="login-brand-logo" />
          <h2 className="login-brand-name">ESI-GM</h2>
          <p className="login-brand-school">École Supérieure d'Informatique Sidi Bel Abbès</p>
          <p className="login-brand-date">8 Mai 1945</p>

          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your ESI-GM account</p>
        </div>

        <div className="login-card-v3">
          <div className="login-demo">
            <h3>Demo Accounts:</h3>
            <ul>
              <li>• Admin: a.admin@esi-sba.dz</li>
              <li>• Storekeeper: s.keeper@esi-sba.dz</li>
              <li>• Student: m.student@esi-sba.dz</li>
            </ul>
          </div>

          <form className="login-form-v3" onSubmit={handleSubmit}>
            <div className="login-field-v3">
              <label>Email Address</label>
              <div className="login-input-v3">
                <Mail size={16} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <small>Use your ESI email: x.xxxx@esi-sba.dz</small>
            </div>

            <div className="login-field-v3">
              <label>Password</label>
              <div className="login-input-v3">
                <Lock size={16} />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="login-submit-v3">
              Sign In
            </button>
          </form>

          <div className="login-footer-v3">
            <div>
              <p onClick={() => navigate('/register')}>
                Don&apos;t have an account? <a href="">Register here</a>
              </p>
            </div>

            <div className="login-divider-v3" />

            <button type="button" className="login-back-v3" onClick={() => navigate('/')}>
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
