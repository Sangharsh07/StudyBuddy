// File Path: StudyBuddy/src/components/CourseCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-indigo-600">
            {course.lessonCount} lessons
          </span>
          <Link
            to={`/course/${course.id}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;