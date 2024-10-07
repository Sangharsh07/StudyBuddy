import React, { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import LessonList from '../components/LessonList';
import { fetchPlaylist } from "../utils/api/api";

function CourseInterface() {
  const [lessons, setLessons] = useState([]);
  const [currentVideo, setCurrentVideo] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadPlaylist = async () => {
      const fetchedLessons = await fetchPlaylist();
      setLessons(fetchedLessons);
      if (fetchedLessons.length > 0) {
        setCurrentVideo(fetchedLessons[0].videoId);
      }
    };

    loadPlaylist();
  }, []);

  const handleLessonClick = (videoId) => {
    setCurrentVideo(videoId);
    updateProgress(videoId);
  };

  const updateProgress = (videoId) => {
    const newProgress = (lessons.findIndex(lesson => lesson.videoId === videoId) + 1) / lessons.length * 100;
    setProgress(newProgress);
  };

  return (
    <div className="flex">
      <VideoPlayer currentVideo={currentVideo} />
      <LessonList lessons={lessons} currentVideo={currentVideo} onLessonClick={handleLessonClick} progress={progress} />
    </div>
  );
}
export default CourseInterface;