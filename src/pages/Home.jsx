import React from "react";
import { Link } from "react-router-dom";
import courses from "../../data/coursesDB";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <div className="text-center py-10">
      <div className="bg-blue-50 py-16 rounded-lg mb-10">
        <h1 className="text-4xl mb-5 text-gray-800">Welcome to StudyBuddy</h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto mb-8">
          Your personalized learning platform for free YouTube courses
        </p>
        <Link
          to="/courses"
          className="inline-block bg-blue-600 text-white text-lg py-3 px-6 rounded hover:bg-blue-800"
        >
          Explore Courses
        </Link>
      </div>

      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explore Free Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
