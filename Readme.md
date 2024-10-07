# StudyBuddy - Free Courses Platform

Learning Project..
Currently Under Development.

StudyBuddy is an interactive web application designed for learners to explore and complete the free courses on youtube without distraction. Built with React, it offers a user-friendly interface, smooth navigation, and various features aimed at enhancing the learning experience.

## Key Features

- **Client-Side Routing**: Utilizes `react-router-dom` for efficient navigation between pages like Home, Courses, and Course Interface.
- **Courses Listings**: Displays a catalog of available courses, each featuring thumbnails and brief descriptions.
- **Video Playback**: Integrated video player for course content, allowing users to watch lessons directly on the platform.
- **Progress Tracking**: Tracks and updates user progress as they complete lessons.
- **YouTube API Integration**: Retrieves course data from YouTube playlists using the YouTube Data API.

## Project Structure

- **App.jsx**: The main component responsible for routing and rendering page components such as the header, Home, and Courses.
- **Courses.jsx**: Displays the list of courses available, each linking to its respective lesson.
- **CourseInterface.jsx**: Handles the video player, lesson list, and user interactions, including progress updates.
- **api.js**: Contains the logic for fetching playlist data from YouTube using Axios.

## Installation Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Sangharsh07/StudyBuddy.git
    cd StudyBuddy
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    - Create a `.env` file in the root directory.
    - Add your YouTube API key:
    ```bash
    VITE_YOUTUBE_API_KEY=your_api_key_here
    ```

4. **Run the Application**:
    ```bash
    npm start
    ```

## Usage

- Navigate to the homepage to browse the list of available courses.
- Click on a course to start watching lessons.
- Your progress will be automatically tracked as you complete lessons.

## Dependencies

- **React**: A JavaScript library for building interactive UIs.
- **React Router DOM**: A library for managing client-side routing in React applications.
- **Axios**: A promise-based HTTP client for making API requests.



