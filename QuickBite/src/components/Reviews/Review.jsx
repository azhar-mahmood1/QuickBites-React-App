import React from 'react';
import "./Review.css";
import Adam from '../../assets/Adam.jpg';
import Katherine from '../../assets/katherine.jpg';
import mark from '../../assets/mark.jpg';

const Review = () => {
  return (
    <div className='container-right'>
      <h4 className="heading">What Says Our Customers</h4>
      <div className="reviews-container">
        <div className="card">
          <img src={Adam} width="250px" alt="user" />
          <div className="card-container">
            <span><i className="ri-double-quotes-l"></i></span>
            <div className="card-details">
              <p>We had a great time collaborating with the filament team. 
                They have my high recommendation!
              </p>
              <h4>Adam A Lee</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Katherine} width="250px" alt="user" />
          <div className="card-container">
            <span><i className="ri-double-quotes-l"></i></span>
            <div className="card-details">
              <p>The Team drastically improved our product's user Experience
                & increased our business outreach.
              </p>
              <h4>Katherine Langford</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={mark} width="250px" alt="user" />
          <div className="card-container">
            <span><i className="ri-double-quotes-l"></i></span>
            <div className="card-details">
              <p>I Absolutely loved working with the filament team.
                Complete experts at what they do!
              </p>
              <h4>Mark Henry</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;