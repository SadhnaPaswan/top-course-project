// import React from 'react'
// import { filterData } from '../data'


// const Filter = () => {
//   return (
//     <div>
//      {filterData.map((item) => (
//   <button key={item.id}>
//     {item.title}
//   </button>
// ))}

//     </div>
//   )
// }

// export default Filter
import React from 'react';
import { filterData } from '../data';

const Filter = () => {
  return (
    <div className="filter-container">
      {filterData.map((item) => (
        <button key={item.id} className="filter-btn">
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
