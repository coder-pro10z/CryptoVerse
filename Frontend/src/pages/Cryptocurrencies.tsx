import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Card, Row, Col, Input } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
import styles from "../styles/Cryptocurrencies.module.scss"; // Import the styles for custom styling

interface CryptocurrenciesProps {
  simplified?: boolean;
}

const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  // Search state
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (isFetching) return <div>Loading...</div>;

  const cryptos = cryptosList?.data?.coins;

  // Filter cryptocurrencies based on search term
  console.log(cryptos)
  console.log(cryptos.uuid)

  const filteredCryptos = cryptos?.filter((crypto: any) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Input */}
      {!simplified && (
        <div className={styles["search-crypto"]}>
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      )}
      
      <Row gutter={[32, 32]} className={styles["crypto-card-container"]}>
        {filteredCryptos?.slice(0, count).map((crypto: any) => (
          <Col xs={24} sm={12} lg={4} xl={5} key={crypto.uuid}> {/* 5 cards per row */}
          
            {/* <Link to={`/crypto/${crypto.rank}`}> */}


            {/* // <li key={coin.uuid}> */}
            {/* Link to the CryptoDetails page using the 'uuid' */}
            <Link to={`/crypto/${crypto.uuid}`}>{crypto.name}
              <Card hoverable className={styles["crypto-card-item"]}>
                {/* Custom Title Section with Icon */}
                <div className={styles["crypto-card-header"]}>
                  <span>{`${crypto.rank}. ${crypto.name}`}</span>
                  <img
                    className={styles["crypto-card-icon"]}
                    src={crypto.iconUrl}
                    alt={crypto.name}
                  />
                </div>
                
                {/* Left-aligned Crypto Info */}
                <div className={styles["crypto-info"]}>
                  <p>Price: {millify(crypto.price)}</p>
                  <p>Market Cap: {millify(crypto.marketCap)}</p>
                  <p>Daily Change: {crypto.change}%</p>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
