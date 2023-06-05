import React from 'react';
import Link from 'next/link';
// import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <style jsx>
        {`
        h1 {
          font-size: 3rem;
          color: #fff;
        }
        `}
      </style>
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to our Travel Website!</h1>
        <p>Experience the joy of traveling to exotic destinations.</p>
        <div className="button-container">
          <Link href="/explore" className="button">Explore Places</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;