import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const High = () => {
  return(
    <>
      <Navigation />
      
      <div className="container my-5">
        <h1>High Price</h1>
        <p>Choose the Chairs</p>
      </div>
      
      <Footer />
    </>
  );
}

export default High;