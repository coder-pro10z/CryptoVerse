import React from 'react';
import { appname } from '../pages/Home';
import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Corrected path to the styles

const Footer = () => {
  return (
    <div className="footer-container">
        <Typography.Title level={5} className="footer-title">
          {appname}
          <br />
          All Rights Reserved
        </Typography.Title>
      <Space className="footer-space">
        <Link to='/' className="footer-link">Home</Link>
        <Link to='/exchanges' className="footer-link">Exchanges</Link>
        <Link to='/news' className="footer-link">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
