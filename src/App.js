// src/App.js

import React, { useState } from 'react';


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <div className={'bg-gray-800 text-white h-screen flex flex-col justify-center items-center gap-4'}>
        <a className={'font-bold text-blue-500 underline text-2xl'} href={"https://word-counter-fawn.vercel.app/"}>/Word Counter</a>
        <a className={'font-bold text-blue-500 underline text-2xl'} href={"https://calculator-psi-orpin.vercel.app/"}>/Calculator</a>
        <a className={'font-bold text-blue-500 underline text-2xl'} href={"https://calculator-pqpq.vercel.app/"}>/Color Picker</a>
        <a className={'font-bold text-blue-500 underline text-2xl'} href={"https://dummy-data-nine.vercel.app/"}>/Dummy Data</a>
        <a className={'font-bold text-blue-500 underline text-2xl'} href={"https://age-calculator-five-green.vercel.app/"}>/Age Calculator</a>
        <a className={'font-bold text-blue-500 underline text-2xl'} href={"https://jaibhalla-dev.vercel.app/"}>/My Portfolio</a>
      </div>
  );
};

export default App;
