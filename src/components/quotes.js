import React, { useEffect, useState } from 'react';
import styles from './quotes.module.css';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'qUy/yRDPny6IxQ71s3XRTA==iTEVL1CybbAzxEJK',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
        }
      } else {
        setQuote('please refresh');
      }
    };

    fetchQuote();
  }, [setQuote]);

  if (quote === '') {
    // Render a loading indicator while the state is being fetched
    return (
      <div className={styles.firstcont}>
        <div className={styles.display_quote}>Loading...</div>
      </div>
    );
  }
  return (
    <div className={styles.firstcont}>
      <div className={styles.display_quote}>
        <p>
          &quot;
          {quote}
          &quot;
          <br />
          <span className={styles.author}>
            -
            {author}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Quotes;
