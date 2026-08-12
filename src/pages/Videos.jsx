import { useState } from "react";
import { Link } from "react-router-dom";

import videos from "../data/videos";

import VideoCard from "../components/VideoCard";
import VideoPlayer from "../components/VideoPlayer";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="videos-page">

      <h1 className="videos-title">
        Our Moments ❤️
      </h1>

      <p className="videos-subtitle">
        Some memories are better relived than remembered.
      </p>

      <div className="videos-grid">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>

      <div className="page-nav">

        <Link to="/story">
          ← Story
        </Link>

        <Link to="/">
          🏠 Home
        </Link>

        <Link to="/letters">
          Letters →
        </Link>

      </div>

      <VideoPlayer
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

    </section>
  );
}