import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { Row, Col, Typography, Select, Spin } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import millify from 'millify';

const CryptoDetails: React.FC = () => {
  const { uuid } = useParams<{ uuid: string }>(); // Extract 'uuid' from URL
  const [timePeriod, setTimePeriod] = useState<string>('7d'); // Default time period

  // Ensure this hook is always called the same way
  const { data: coinData, isFetching, error } = useGetCryptoDetailsQuery({ uuid, timePeriod });

  // Handle loading and error states
  if (isFetching) return <Spin />;
  if (error) return <div>Error fetching crypto details</div>;

  // Ensure sparklineData is correctly parsed
  const sparklineData = coinData?.data?.coin.sparkline
    .filter((price: any) => price !== null)
    .map((price: any, index: any) => ({
      time: index.toString(),
      price: parseFloat(price),
    })) || [];

  const { Title, Text } = Typography;
  const { Option } = Select;

  // Handle the selection of a time period
  const handleTimePeriodChange = (value: string) => {
    setTimePeriod(value);
  };

  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Title level={2}>
            {coinData?.data?.coin.name} ({coinData?.data?.coin.symbol}) Price
          </Title>
          <p>
            {coinData?.data?.coin.name} live price in USD. View value statistics, market cap, and supply.
          </p>
        </Col>

        <Col span={24}>
          <Select
            defaultValue="7d"
            onChange={handleTimePeriodChange}
            style={{ width: 200 }}
          >
            {['24h', '7d', '30d', '1y'].map((period) => (
              <Option key={period} value={period}>
                {period}
              </Option>
            ))}
          </Select>
        </Col>

        <Col span={24}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={sparklineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Col>

        <Col span={24}>
          <Row>
            <Col span={12}>
              <Text>Market Cap:</Text>
              <Title level={5}>{millify(parseFloat(coinData?.data?.coin.marketCap))}</Title>
            </Col>
            <Col span={12}>
              <Text>24h Volume:</Text>
              <Title level={5}>{millify(parseFloat(coinData?.data?.coin['24hVolume']))}</Title>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Text>Rank:</Text>
              <Title level={5}>{coinData?.data?.coin.rank}</Title>
            </Col>
            <Col span={12}>
              <Text>Price Change (24h):</Text>
              <Title level={5}>{coinData?.data?.coin.change}%</Title>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Title level={3}>About {coinData?.data?.coin.name}</Title>
          <p>{coinData?.data?.coin.description}</p>
          <a href={coinData?.data?.coin.coinrankingUrl} target="_blank" rel="noopener noreferrer">
            More info on CoinRanking
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default CryptoDetails;
