// File Path: StudyBuddy/src/pages/Courses.jsx

import React from 'react';
import courses from '../../data/coursesDB'; // Adjust the import path as necessary
import CourseCard from '../components/CourseCard';

function Courses() {
  return (
    <div className="py-5">
      <h2 className="text-2xl mb-5">Available Courses</h2>
      <div className="flex justify-between">
        {courses.map((course) => (
          <div className='p-5'>
          <CourseCard key={course.id} course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;