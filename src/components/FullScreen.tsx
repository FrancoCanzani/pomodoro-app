import useFullScreen from '../hooks/useFullScreen';

export default function FullScreen() {
  const { isFullScreen, handleFullScreenToggle } = useFullScreen();
  return (
    <button
      onClick={handleFullScreenToggle}
      className='my-4 animate-pulse rounded-md bg-black px-2 py-1 font-mono font-bold uppercase italic text-white hover:bg-gray-800 active:translate-y-0.5'
    >
      {isFullScreen ? 'Exit zen mode' : 'Enable zen mode'}
    </button>
  );
}
