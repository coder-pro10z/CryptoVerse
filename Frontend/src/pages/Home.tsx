import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const appname = "CryptoVerse";
const {Title} = Typography;
const HomePage = () => {
  const username = "";

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-800">
        <h1 className="text-5xl font-bold mb-4">
          Welcome {username} to {appname}
        </h1>
        <p className="text-lg">
          This is the Home Page. Navigate using the menu above.
        </p>
      </div> */}
      <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={5}/></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={5}/></Col>
          <Col span={12}><Statistic title="Total Market Cap" value={5}/></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={5}/></Col>
          <Col span={12}><Statistic title="Total Markets" value={5}/></Col>
        </Row>
      </>
    </>
  );
};

export default HomePage;
export { appname };
