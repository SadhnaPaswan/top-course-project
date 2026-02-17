// import React, { useEffect, useState } from 'react'
// import { apiUrl } from '../data'
// import {toast} from "react-toastify"
// import Card from './Card'



// const Cards = () => {
//   const [courses,setCourses]=useState({})
  
//   const getCourses = () => {
//   if (!courses) return [];
//   return Object.values(courses).flat();
// }

//   useEffect(()=>{
//     const fetchData = async()=>{
//       try{
//         const res=await fetch(apiUrl);
//         const data=await res.json();
//         setCourses(data.data)  
//          console.log("Fetched Data:", data.data);
//       } 

    
//       catch (error) {
//         toast.error("Something went wrong")
//     }
// }
// fetchData();
// } , [] )
//   return (
//     <div>
// {getCourses().map((course) => (
//       <Card key={course.id} course={course} />
//     ))}
//     </div>
//   )
// }

// export default Cards

import React, { useEffect, useState } from 'react';
import { apiUrl } from '../data';
import { toast } from "react-toastify";
import Card from './Card';

const Cards = () => {

  const [courses, setCourses] = useState({});

  const getCourses = () => {
    if (!courses) return [];
    return Object.values(courses).flat();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
        console.log("Fetched Data:", data.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Cards;
