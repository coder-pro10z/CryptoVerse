// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar'; // Uncomment if used
import SideBar from './components/SideBar'; // Uncomment if used
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Layout from './routes/Layout';
import RegisterPage from './pages/Register';
import { AuthProvider } from './components/AuthContext';
import Logout from './components/Logout';
import PrivateRoute from './routes/PrivateRoute'; // Uncomment if used
import Cryptocurrencies from './pages/Cryptocurrencies';
import Exchanges from './pages/Exchanges';
import News from './pages/News';
import CryptoDetails from './pages/CryptoDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>   
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
            <Route path="/profile" element={<PrivateRoute element={<h1>Profile Page</h1>} />} />
            <Route path="/settings" element={<PrivateRoute element={<h1>Settings Page</h1>} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Add routes for CrytoVerse Components */}
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/crypto/:coinId" element={<CryptoDetails />} /> */}
            <Route path="/crypto/:uuid" element={<CryptoDetails />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
