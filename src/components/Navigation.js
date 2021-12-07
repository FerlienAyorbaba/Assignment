import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light content-center py-3">
      <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">E-Commerce</Link>
          
          <div class="dropdown"> 
              <button type="button" className="btn btn dropdown-toggle" data-bs-toggle="dropdown">
                    ALL TYPES
              </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Wooden Chair</a></li>
                    <li><a class="dropdown-item" href="#">Sofa</a></li>
                    <li><a class="dropdown-item" href="#">Sofabed</a></li>
                  </ul>
          </div>
             
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Popular Products</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/low">Low Price</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/high">High Price</Link></li>
            </ul>
          </div>

          <div class="dropdown">
            <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
              PRICE
           </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Low Price</a></li>
              <li><a class="dropdown-item" href="#">High Price</a></li>
              <li><a class="dropdown-item" href="#">Standart</a></li>
            </ul>
          </div>
          
      </div>
    </nav>
  );
}

export default Navigation;