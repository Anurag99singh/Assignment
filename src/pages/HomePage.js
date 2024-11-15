// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { getNewsByCategory } from '../api/newsApi';
import SideMenu from '../components/SideMenu';
import NewsList from '../components/NewsList';
import NewsDetails from '../components/NewsDetails';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNewsByCategory(category);
      setArticles(news);
    };
    fetchNews();
  }, [category]);

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
    },
    sideMenu: {
      width: '20%',
      backgroundColor: 'light-grey',
      borderRight: '1px solid black',
      padding: '1.5rem',
    },
    newsList: {
      flex: 2,
      padding: '1rem',
      overflowY: 'auto',
    },
    newsDetails: {
      flex: 1,
      padding: '1rem',
      backgroundColor: '#fff',
      borderLeft: '1px solid black',
      overflowY: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sideMenu}>
        <SideMenu onSelectCategory={setCategory} />
      </div>
      <div style={styles.newsList}>
        <NewsList articles={articles} onArticleSelect={setSelectedArticle} />
      </div>
      <div style={styles.newsDetails}>
        <NewsDetails article={selectedArticle} />
      </div>
    </div>
  );
};

export default HomePage;
