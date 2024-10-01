import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";

//to import custom hook to serve an query for API
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import styles from '../styles/pages/Home.module.scss'

const appname = "CryptoVerse";
const {Title} = Typography;

const HomePage = () => {
  
  const username = "";
  //to use the hook and state from the redux
  const {data, isFetching}=useGetCryptosQuery({});
// console.log(data )
// console.log(data?.data)
const globalStats= data?.data?.stats;
// if(isFetching) return "loading..."
if (isFetching) return <Spin />;
  return (
    <>
      <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total}/></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)}/></Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)}/></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)}/></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)}/></Col>
        </Row>

        <div className={styles["home-heading-container"]}>
          <Title className="home-title" level={2}>Top 10 Cryptocurrencies in the world</Title>
          <Title className="show-more" level={3}><Link to='/cryptocurrencies'>Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified/>

        <div className={styles["home-heading-container"]}>
          <Title className="home-title" level={2}>Latest Crypto News</Title>
          <Title className="show-more" level={3}><Link to='/news'>Show More</Link></Title>
        </div>
        <News/> 

      </>
    </>
  );
};

export default HomePage;
export { appname };
