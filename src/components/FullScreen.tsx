import { useState } from 'react';

export default function FullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullScreen(true);
        })
        .catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message}`
          );
        });
    } else {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .then(() => {
            setIsFullScreen(false);
          })
          .catch((err) => {
            console.error(
              `Error attempting to exit full-screen mode: ${err.message}`
            );
          });
      }
    }
  };

  return (
    <button
      onClick={handleFullScreenToggle}
      className='rounded-md bg-red-200 px-4 py-2 font-mono font-bold uppercase text-red-800 hover:bg-red-100'
    >
      {isFullScreen ? 'Exit zen mode' : 'Enable zen mode'}
    </button>
  );
}
