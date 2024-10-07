import axios from 'axios';
export const fetchPlaylist = async () => {
  const playlistId = 'PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige';
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY; // Correctly prefixed with VITE_
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.items.map(item => ({
      id: item.id,
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
      thumbnail: item.snippet.thumbnails.default.url
    }));
  } catch (error) {
    console.error('Error fetching playlist:', error);
    return [];
  }
};