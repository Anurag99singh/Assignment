// src/components/NewsCard.js
import React from 'react';

const NewsCard = ({ article, onClick }) => (
  <div onClick={() => onClick(article)} style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem', cursor: 'pointer' }}>
    <h3>{article.title}</h3>
    <p>{article.description}</p>
  </div>
);

export default NewsCard;
