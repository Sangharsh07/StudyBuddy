import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import LessonList from "../components/LessonList";
import { fetchPlaylist } from "../utils/api/api";
import courses from "../../data/coursesDB";

function CourseInterface() {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const [progress, setProgress] = useState(0);
  const course = courses.find((course) => course.id === parseInt(id));

  useEffect(() => {
    const loadPlaylist = async () => {
      if (course) {
        const fetchedLessons = await fetchPlaylist(course.playlistId);
        const lessonsWithCompletion = fetchedLessons.map(lesson => ({
          ...lesson,
          completed: false
        }));
        setLessons(lessonsWithCompletion);
        if (lessonsWithCompletion.length > 0) {
          setCurrentVideo(lessonsWithCompletion[0].videoId);
        }
      }
    };

    loadPlaylist();
  }, [course]);

  const handleLessonClick = (videoId) => {
    setCurrentVideo(videoId);
    updateProgress(videoId);
  };

  const handleCheckboxChange = (videoId) => {
    setLessons(prevLessons =>
      prevLessons.map(lesson =>
        lesson.videoId === videoId
          ? { ...lesson, completed: !lesson.completed }
          : lesson
      )
    );
  };

  const updateProgress = (videoId) => {
    const completedLessons = lessons.filter(lesson => lesson.completed).length;
    const newProgress = (completedLessons / lessons.length) * 100;
    setProgress(newProgress);
  };

  return (
    <div className="flex">
      <VideoPlayer currentVideo={currentVideo} />
      <LessonList
        courseName={course.title}
        lessons={lessons}
        currentVideo={currentVideo}
        onLessonClick={handleLessonClick}
        onCheckboxChange={handleCheckboxChange}
        progress={progress}
      />
    </div>
  );
}

export default CourseInterface;
