
// import React from 'react';
// import './Card.css';


// const Card = ({ title, subtitle, text, link1, link2, imgSrc }) => {
//   return (
//     <div className="card" style={{ width: '18rem' }}>
//       <img src={imgSrc} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
//         <p className="card-text">{text}</p>
//         <a href={link1} className="btn btn-primary mr-2"><i className="fas fa-link"></i> view more</a>
//         {/* <a href={link2} className="btn btn-primary"><i className="fab fa-github"></i> Github</a> */}
//       </div>
//     </div>
//   );
// };

// export default Card;

// Card.js
import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, ratings, text, link1, link2, imgSrc }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imgSrc} className="card-img-top" alt="Hostel" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="ratings">
          {/* Assuming you have a star icon for ratings */}
          {[...Array(ratings)].map((_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
        </div>
        <p className="card-text">{text}</p>
        <a href={link1} className="btn btn-primary mr-2"><i className="fas fa-link"></i> Visit Hostel page</a>
        {/* <a href={link2} className="btn btn-primary"><i className="fab fa-github"></i> Github</a> */}
      </div>
    </div>
  );
};

export default Card;


