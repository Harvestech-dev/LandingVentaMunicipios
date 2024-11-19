import React from 'react';

import '../Styles/carouselFader.css'

import reasons from '../Json/reasons.json'
function CarouselFader() {

  return (<div className='carousel'>

<h2>Razones para Tener Presencia en Internet</h2>
    <div id="carouselExampleFade" className="carousel slide " data-bs-ride="carousel"
    data-bs-interval="5000">
      <div className="carousel-inner">
        {reasons.map((reason, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-block w-100 text-center p-5">
                <h3>
                {reason.icon} 
                </h3>
              <h3>
                {reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        </div>
  );
}

export default CarouselFader;
