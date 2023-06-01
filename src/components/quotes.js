import React, { useEffect, useState } from 'react';

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
    return <div className="display-quote">Loading...</div>;
  }

  return (
    <div className="display-quote">
      <p>
        &quot;
        {quote}
        &quot;
        <br />
        <span className="author">
          -
          {author}
        </span>
      </p>
    </div>
  );
};

export default Quotes;
