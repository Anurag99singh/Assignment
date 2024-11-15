// src/components/NewsList.js
import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ articles, onArticleSelect }) => (
  <div>
    {articles.map((article, index) => (
      <NewsCard key={index} article={article} onClick={onArticleSelect} />
    ))}
  </div>
);

export default NewsList;
