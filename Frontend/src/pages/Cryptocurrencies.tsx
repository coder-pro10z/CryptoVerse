// import React from "react";
// import { useGetCryptosQuery } from "../services/cryptoApi";
// import { Card, Row, Col } from "antd";
// import millify from "millify";
// import { Link } from "react-router-dom";

// interface CryptocurrenciesProps {
//   simplified?: boolean;
// }

// const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({ simplified }) => {
//   const count = simplified ? 10 : 100;
//   const { data: cryptosList, isFetching } = useGetCryptosQuery({});

//   if (isFetching) return <div>Loading...</div>;

//   const cryptos = cryptosList?.data?.coins;
//   // const [cryptos,setCrytos] = cryptosList?.data?.coins;

//   // console.log(cryptosList?.data?.coins)
//   console.log(cryptos)

//   return (
//     <>
//        <Row gutter={[32, 32]} className="crypto-card-container">
//          {cryptos?.slice(0, count).map((currency:any) => ( 
//         // {cryptos.map((currency:any) => (
//           <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
//             <Link to={`/crypto/${currency.id}`}>
//               <Card
//                 title={`${currency.rank}. ${currency.name}`}
//                 extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />}
//                 hoverable
//               >
//                 <p>Price: {millify(currency.price)}</p>
//                 <p>Market Cap: {millify(currency.marketCap)}</p>
//                 <p>Daily Change: {currency.change}%</p>
//               </Card>
//             </Link>
//           </Col>
//         ))}
//       </Row> 
//     </>
//   );
// };

// export default Cryptocurrencies;

import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Card, Row, Col } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
import "../styles/Cryptocurrencies.module.scss"; // Import the styles for custom styling

interface CryptocurrenciesProps {
  simplified?: boolean;
}

const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  if (isFetching) return <div>Loading...</div>;

  const cryptos = cryptosList?.data?.coins;

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.slice(0, count).map((crypto:any) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                hoverable
                className="crypto-card-item"
              >
                {/* Image Section */}
                <div className="crypto-card-image-container">
                  <img
                    className="crypto-image"
                    src={crypto.iconUrl}
                    alt={crypto.name}
                  />
                </div>
                
                {/* Crypto Info */}
                <div className="crypto-info">
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
