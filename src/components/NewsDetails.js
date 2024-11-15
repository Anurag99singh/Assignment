// src/components/NewsDetails.js
import React from 'react';

const NewsDetails = ({ article }) => (
  <div style={{ padding: '1rem' }}>
    {article ? (
      <>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </>
    ) : (
      <p>Select a news article to view details</p>
    )}
  </div>
);

export default NewsDetails;
