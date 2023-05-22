import { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState({
    minutes: 25,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
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

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-white'>
      <h1 className='text-center text-9xl font-light'>{`${
        countdown.minutes
      }:${countdown.seconds.toString().padStart(2, '0')}`}</h1>
      <div className='flex items-center justify-center'>
        <button className='m-6 rounded-md bg-slate-400 px-6 py-4 text-xl font-bold uppercase'>
          Pause
        </button>
        <button className='m-6 rounded-md bg-red-400 px-6 py-4 text-xl font-bold uppercase'>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Countdown;
