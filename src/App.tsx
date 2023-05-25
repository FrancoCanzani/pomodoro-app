import { useState } from 'react';

import Timer from './components/Timer';
import FunctionalButton from './components/FunctionalButton';
import TimerSelector from './components/TimerSelector';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [countdown, setCountdown] = useState({
    minutes: 25,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  // State to switch color of timer selector bg
  const [currentTimer, setCurrentTimer] = useState('Pomodoro');

  let interval: undefined | number = undefined;

  const playSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      viewBox='0 0 24 24'
    >
      <path fill='currentColor' d='M8 19V5l11 7l-11 7Z' />
    </svg>
  );

  const pauseSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      viewBox='0 0 24 24'
    >
      <path fill='currentColor' d='M14 19V5h4v14h-4Zm-8 0V5h4v14H6Z' />
    </svg>
  );

  const resetSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 14 14'
    >
      <g
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path d='M7 13.5A6.5 6.5 0 1 1 13.5 7a7.23 7.23 0 0 1-2 5' />
        <path d='m13.5 11.5l-2 .5l-.5-2M9 9L7 6.5H4' />
      </g>
    </svg>
  );

  //   Play, pause and reset functions
  function handleCountdown() {
    setIsRunning(true);
  }

  // clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval()

  function handleReset() {
    clearInterval(interval);
    setIsRunning(false);

    let resetTime: { minutes: number; seconds: number } = {
      minutes: 0,
      seconds: 0,
    };

    // Determine the appropriate reset time based on the current timer type
    if (currentTimer === 'Pomodoro') {
      resetTime = {
        minutes: 25,
        seconds: 0,
      };
    } else if (currentTimer === 'Short break') {
      resetTime = {
        minutes: 5,
        seconds: 0,
      };
    } else if (currentTimer === 'Long break') {
      resetTime = {
        minutes: 10,
        seconds: 0,
      };
    }

    setCountdown(resetTime);
  }

  function handlePause() {
    clearInterval(interval);
    setIsRunning(false);
  }

  return (
    <main className='font-atkinson flex min-h-screen min-w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-red-100'>
      <Header />
      <div className='mt-8 flex items-center justify-center px-2'>
        <TimerSelector
          timerType={'Pomodoro'}
          time={{
            minutes: 25,
            seconds: 0,
          }}
          setCountdown={setCountdown}
          currentTimer={currentTimer}
          setCurrentTimer={setCurrentTimer}
        />
        <TimerSelector
          timerType={'Short break'}
          time={{
            minutes: 5,
            seconds: 0,
          }}
          setCountdown={setCountdown}
          currentTimer={currentTimer}
          setCurrentTimer={setCurrentTimer}
        />
        <TimerSelector
          timerType={'Long break'}
          time={{
            minutes: 10,
            seconds: 0,
          }}
          setCountdown={setCountdown}
          currentTimer={currentTimer}
          setCurrentTimer={setCurrentTimer}
        />
      </div>

      <Timer
        countdown={countdown}
        setCountdown={setCountdown}
        isRunning={isRunning}
        interval={interval}
      />

      <div className='mt-4 flex items-center justify-center sm:mt-8'>
        {isRunning ? (
          <FunctionalButton
            action={handlePause}
            icon={pauseSVG}
            color='bg-gray-400'
            label='Pause timer'
          />
        ) : (
          <FunctionalButton
            action={handleCountdown}
            icon={playSVG}
            color='bg-green-400'
            label='Play timer'
          />
        )}

        <FunctionalButton
          action={handleReset}
          icon={resetSVG}
          color='bg-red-400'
          label='Reset timer'
        />
      </div>
      <Tasks />
      <Footer />
    </main>
  );
}

export default App;
