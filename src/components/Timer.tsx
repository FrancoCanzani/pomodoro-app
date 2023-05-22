import { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState({
    minutes: 25,
    seconds: 0,
  });

  const [isRunning, setIsRunning] = useState(false);

  let interval = null;

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown.seconds > 0) {
            return {
              ...prevCountdown,
              seconds: prevCountdown.seconds - 1,
            };
          } else if (prevCountdown.minutes > 0) {
            return {
              minutes: prevCountdown.minutes - 1,
              seconds: 59,
            };
          } else {
            // Countdown is complete
            clearInterval(interval);
            return prevCountdown;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function handleCountdown() {
    setIsRunning(true);
  }

  function handleReset() {
    clearInterval(interval);
    setIsRunning(false);
    setCountdown({
      minutes: 25,
      seconds: 0,
    });
  }

  function handlePause() {
    clearInterval(interval);
    setIsRunning(false);
  }

  return (
    <div className='text-white'>
      <h1 className='text-center text-9xl font-light'>{`${
        countdown.minutes
      }:${countdown.seconds.toString().padStart(2, '0')}`}</h1>
      <div className='flex items-center justify-center'>
        {isRunning ? (
          <button
            onClick={handlePause}
            className='m-6 rounded-md bg-slate-400 px-6 py-4 text-xl font-bold uppercase active:translate-y-0.5'
          >
            Pause
          </button>
        ) : (
          <button
            onClick={handleCountdown}
            className='m-6 rounded-md bg-green-400 px-6 py-4 text-xl font-bold uppercase active:translate-y-0.5'
          >
            Play
          </button>
        )}

        <button
          onClick={handleReset}
          className='m-6 rounded-md bg-red-400 px-6 py-4 text-xl font-bold uppercase active:translate-y-0.5'
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Countdown;
