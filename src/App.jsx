// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Filter from './components/Filter' 
// import Cards from './components/Cards'
// import Card from './components/Card'
// // import { apiUrl,filterData } from './data'

// const App = () => {

//   return (
//     <div>
//       <Navbar/>
//        <Filter />
//        <Cards/>
//        <Card/>
//     </div>
//   )
// }

// export default App

import React from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';

const App = () => {
  return (
    <div>
      <Navbar />
      <Filter />
      <Cards />
    </div>
  );
};

export default App;
