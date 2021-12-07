import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Low = () => {
  return(
    <>
      <Navigation />

      <div className="container my-5">
        <h1>Low Price</h1>
        <p>Choose the Chairs</p>
      </div>

      <Footer />
    </>
  );
}

export default Low;