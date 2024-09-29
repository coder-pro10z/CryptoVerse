import React from 'react';
import { Typography, Row, Col, Space } from 'antd';
import { MailOutlined, GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from '../styles/pages/Contact.module.scss'; // Assuming you want to style it separately

const { Title, Link, Paragraph } = Typography;

const Contact: React.FC = () => {
  return (
    <div className={styles["contact-container"]}>
      <Title level={2}>Contact Me</Title>
      
      <Space direction="horizontal" size="large" className={styles["contact-links"]}>
        <Row className={styles["contact-item"]}>
          <MailOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
          <Link href="mailto:coderrrr10@gmail.com">coderrrr10@gmail.com</Link>
        </Row>
        <Row className={styles["contact-item"]}>
          <GithubOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
          <Link href="https://github.com/coder-pro10z" target="_blank">My GitHub</Link>
        </Row>
        <Row className={styles["contact-item"]}>
          <GlobalOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
          <Link href="https://yourportfolio.com" target="_blank">My Portfolio</Link>
        </Row>
      </Space>

      <Paragraph style={{ marginTop: '20px' }}>
        Feel free to reach out for any collaboration or inquiries!
      </Paragraph>
    </div>
  );
};

export default Contact;
