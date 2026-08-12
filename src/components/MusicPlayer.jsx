import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/birthday.mp3" type="audio/mpeg" />
      </audio>

      <div className="music-player">
        <button onClick={toggleMusic} className="music-btn">
          {playing ? <FaPause /> : <FaPlay />}
        </button>

        <span className="music-text">
          <FaVolumeUp /> Music
        </span>
      </div>
    </>
  );
}