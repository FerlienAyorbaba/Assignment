import React from 'react';
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';

const Card = () => {
 return(
    
  <section className="py-5">
  <div className="container">
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
  <div class="card">
 
     <img src={img1} class="card-img" alt="img1"/>
     <div class="card-body">
        <h5 class="card-title text-center">Sofa Double</h5>

          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
         
        <div class="btn-group" role="group" aria-label="Basic example">
           <button type="button" class="btn btn-light">Rp.300.000</button>
           <button type="button" class="btn btn-light"> 🛒</button>
        </div>
        </div>
      </div>
  </div>

  <div class="col">
      <div class="card">
      <img src={img2} class="card-img" alt="img2"/>
      <div class="card-body">
          <h5 class="card-title text-center">Sofa Tripple</h5>
        
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        
        <div class="btn-group" role="group" aria-label="Basic example">
           <button type="button" class="btn btn-light">Rp.200.000</button>
           <button type="button" class="btn btn-light" > 🛒</button>
        </div>

      </div>
      </div>
  </div>

  <div class="col">
      <div class="card">
      <img src={img3} class="card-img" alt="img3"/>
      <div class="card-body">
          <h5 class="card-title text-center">Sofa Single</h5>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
         
          <div class="btn-group" role="group" aria-label="Basic example">
           <button type="button" class="btn btn-light">Rp.100.000</button>
           <button type="button" class="btn btn-light"> 🛒</button>
          </div>
      </div>
      </div>
  </div>
  </div>
  </div>
</section>
);
}


export default Card;