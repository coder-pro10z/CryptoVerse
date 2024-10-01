import React from 'react';
import styles from '../styles/pages/News.module.scss';

interface NewsCardProps {
  news: {
    title: string;
    url: string;
    excerpt: string;
    thumbnail: string;
    date: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className={styles.newsCard}>
      <img src={news.thumbnail} alt={news.title} className={styles.newsImage} />
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{news.title}</h3>
      <p className={styles.newsExcerpt}>{news.excerpt}</p>
      <a href={news.url} className={styles.newsLink} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>    
    
    </div>
  );
};

export default NewsCard;
