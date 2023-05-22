import { useEffect } from 'react';

export default function Timer({
  countdown,
  isRunning,
  interval,
  setCountdown,
}) {
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

  //   Shows the timer in the tab of the browser
  useEffect(() => {
    document.title = `${countdown.minutes}:${countdown.seconds
      .toString()
      .padStart(2, '0')} | Focus`;
  }, [countdown]);

  return (
    <div className='text-white'>
      <h1 className='text-center text-9xl font-black'>{`${
        countdown.minutes
      }:${countdown.seconds.toString().padStart(2, '0')}`}</h1>
    </div>
  );
}
