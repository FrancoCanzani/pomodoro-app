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
      className='my-4 rounded-md border-2 border-white bg-black px-2 py-1 font-mono font-bold uppercase text-white hover:bg-gray-800 active:translate-y-0.5'
    >
      {isFullScreen ? 'Exit zen mode' : 'Enable zen mode'}
    </button>
  );
}
