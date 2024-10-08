import React from 'react';

function LessonList({ courseName, lessons, currentVideo, onLessonClick, onCheckboxChange, progress }) {
  return (
    <div className="bg-gray-100 overflow-y-auto p-5" style={{ width: '300px', paddingTop: '15px', margin: '20px' }}>
      <h2 className="mb-5">{courseName}</h2>
      <ul className="list-none p-0">
        {lessons.map((lesson, index) => (
          <li
            key={lesson.id}
            className={`p-2 cursor-pointer ${lesson.videoId === currentVideo ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}
          >
            <input 
              type="checkbox"
              checked={lesson.completed}
              onChange={() => onCheckboxChange(lesson.videoId)}
              className="mr-2 p-10"
            />
            <span onClick={() => onLessonClick(lesson.videoId)}>
              {index + 1}. {lesson.title}
            </span>
          </li>
        ))}
      </ul>
      <div className="h-2 bg-gray-300 mt-5">
        <div className="h-full bg-blue-500" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default LessonList;