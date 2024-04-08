import React, { useState, useEffect } from 'react';

const AnimatedText = ({ toRotate }) => {
 const [text, setText] = useState("Web Developer"); // Added line
 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let interval = null;
 let rotationIndex = 0;

 const handleMouseOver = () => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
   setText((prevText) =>
    prevText
     .split('')
     .map((letter, index) => {
      if (index < iteration) {
       return toRotate[rotationIndex][index];
      }

      return letters[Math.floor(Math.random() * 26)];
     })
     .join('')
   );

   if (iteration >= toRotate[rotationIndex].length) {
    clearInterval(interval);
   }

   iteration += 1 / 5;
  }, 30);

  // Update rotationIndex for the next cycle
  rotationIndex = (rotationIndex + 1) % toRotate.length;
 };

 // Clean up the interval on component unmount
 useEffect(() => {
  return () => clearInterval(interval);
 }, [interval]);

 return (
  <h1 onMouseOver={handleMouseOver} data-value={toRotate[0]}>
   {text}
  </h1>
 );
};

const Rotate = () => {
 const toRotate = ["Web Developer", "Video editor"];

 return <AnimatedText toRotate={toRotate} />;
};

export default Rotate;
