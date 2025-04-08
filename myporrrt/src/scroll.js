import React from 'react';
import ScrollVelocity from './scrollvel';

const ScrollComp =()=>{
    return(

<ScrollVelocity
  texts={['','multifaceted | student of knowledge | web development | and more. |']} 
  velocity={"80"}
  className="custom-scroll-text"
/>
    );
};

export default ScrollComp;