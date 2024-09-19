import React from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import  NewsCard  from '../components/NewsCard';
import styles from '../styles/pages/News.module.scss';

interface NewsProps {
  simplified?: boolean;
}

const News: React.FC<NewsProps> = ({ simplified }) => {
  const { data, error, isLoading } = useGetCryptoNewsQuery({});
  console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news</div>;

  // Limit the number of news articles if 'simplified' prop is true
  const newsToDisplay = simplified ? data?.slice(0, 5) : data;
console.log(newsToDisplay)
  return (
    <div className={styles.newsContainer}>
      {newsToDisplay.data.map((news:any) => (
        <NewsCard key={news.url} news={news} />
      ))}
    </div>
  );
};

export default News;
