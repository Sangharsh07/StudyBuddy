import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center py-5 border-b border-gray-200">
      <img className='w-40 ml-20' src="../Assets/logo.png" alt="logo" />
      <nav>
        <ul className="list-none p-0 flex gap-5">
          <li className="text-lg">
            <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          </li>
          <li className="text-lg">
            <Link to="/courses" className="text-gray-800 hover:text-blue-600">Courses</Link>
          </li>
          <li className="text-lg">
            <Link to="/progress" className="text-gray-800 hover:text-blue-600">Progress</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;