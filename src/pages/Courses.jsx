import React from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  const thumbnailUrl = './Assets/React_JS.jpg'; 

  return (
    <div className="py-5">
      <h2 className="text-2xl mb-5">Available Courses</h2>
      <div className="border border-gray-200 rounded-lg p-2 mb-3 transition-transform transform hover:shadow-lg" style={{ width: '300px' }}>
<img
  src={thumbnailUrl}
  alt="Course Thumbnail"
  className="rounded-lg mb-2"
  style={{ width: '100%', height: 'auto' }}
/>
        <h3 className="text-lg mb-2">React.js Course by Chai aur Code</h3>
        <p className="text-gray-600 mb-3 text-sm">
          Learn React.js from scratch with this comprehensive course from the YouTube channel "Chai aur Code".
        </p>
        <Link to="/course" className="inline-block bg-blue-600 text-white py-1.5 px-3 rounded hover:bg-blue-800 text-sm">
          Start Course
        </Link>
      </div>
    </div>
  );
}

export default Courses;