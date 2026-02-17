// import React from 'react'
// import {FcLike} from "react-icons/fc";

// const Card = ({course}) => {
//   return (
//     <div>
//       <div>
//        <img src={course?.image?.url} alt={course?.title} />
//        console.log(course);


     
//       <div>
//         <button>
//         <FcLike fontSize="1.75rem"/>
//         </button>
//          </div>
//       </div>
//       <div>
//          <p>{course?.title}</p>
//       <p>{course?.description}</p>
//       </div>

//     </div>
    
//   )
// }

// export default Card
import React from 'react';
import { FcLike } from "react-icons/fc";

const Card = ({ course }) => {

  console.log(course);

  return (
    <div className="card">
      
      <div className="card-image">
        <img src={course?.image?.url} alt={course?.title} />
      </div>

      <button className="like-btn">
        <FcLike fontSize="1.75rem" />
      </button>

      <div className="card-content">
        <p className="card-title">{course?.title}</p>
        <p className="card-desc">{course?.description}</p>
      </div>

    </div>
  );
};

export default Card;
