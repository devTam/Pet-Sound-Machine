import React, { useRef, useEffect } from 'react';
import './DrumPad.css';

const DrumPad = ({ picture, id, letter, src, handleDisplay }) => {
  let styles = {
    background: `url(${picture}) no-repeat top center`,
    backgroundSize: 'cover',
  };

  const audioRef = useRef(null);
  const drumRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.keyCode === letter.charCodeAt()) {
      audioRef.current.play();
      audioRef.current.currentTime = 0;
      handleDisplay(id);
      drumRef.current.classList.add('hover');
      setTimeout(() => {
        drumRef.current.classList.remove('hover');
      }, 800);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleClick = () => {
    audioRef.current.play();
    audioRef.current.currentTime = 0;
    handleDisplay(id);
  };

  return (
    <div
      className="drum-pad"
      id={id}
      style={styles}
      onClick={handleClick}
      ref={drumRef}
    >
      <p className="drum-pad__letter">{letter}</p>
      <audio ref={audioRef} src={src} className="clip" id={letter} />
    </div>
  );
};

export default DrumPad;
