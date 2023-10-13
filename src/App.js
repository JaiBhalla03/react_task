// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Task1 from './components/task1';
import Task2 from './components/task2';
import Task3 from './components/task3';
import Task4 from './components/task4';
import Task5 from './components/task5';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <Router>
        <div>
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Jai Bhalla
              </span>
              </a>
              <button
                  onClick={toggleMenu}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={menuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div
                  className={`${
                      menuOpen ? 'block' : 'hidden'
                  } w-full md:block md:w-auto transition-all duration-300`}
                  id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                        className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white hover:md:dark:text-blue-500"
                        to="/task1"
                    >
                      Word Counter
                    </Link>
                  </li>
                  <li>
                    <Link
                        className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white hover:md:dark:text-blue-500"
                        to="/task2"
                    >
                      Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                        className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white hover:md:dark:text-blue-500"
                        to="/task3"
                    >
                      Color Picker
                    </Link>
                  </li>
                  <li>
                    <Link
                        className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white hover:md:dark:text-blue-500"
                        to="/task4"
                    >
                      Dummy Data
                    </Link>
                  </li>
                  <li>
                    <Link
                        className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white hover:md:dark:text-blue-500"
                        to="/task5"
                    >
                      Age Calculator
                    </Link>
                  </li>
                  <li>
                    <a
                        className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:md:text-blue-700 md:p-0 dark:text-white hover:md:dark:text-blue-500"
                        href="https://jaibhalla-dev.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      My Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
            <Route path="/task5" element={<Task5 />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
