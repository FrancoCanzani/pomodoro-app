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
      className='mb-2 rounded-md border-2 border-red-700 bg-red-200 px-2 py-1 font-mono font-bold uppercase text-red-800 hover:bg-red-100'
    >
      {isFullScreen ? 'Exit zen mode' : 'Enable zen mode'}
    </button>
  );
}
