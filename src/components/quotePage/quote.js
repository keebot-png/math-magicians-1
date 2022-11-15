import React from 'react';
import './quote.css';
import quotes from '../quotesData/quotes.json';

const Quotes = () => {
  const getRandomIndex = () => {
    const min = 0;
    const max = 4;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const quoteObj = quotes[getRandomIndex()];

  return (
    <div className="quotes-container">
      <p>
        {quoteObj.quote}
      </p>
      <span>
        -
        {quoteObj.author}
      </span>
    </div>
  );
};

export default Quotes;
