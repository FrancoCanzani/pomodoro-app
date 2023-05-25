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
      width='32'
      height='32'
      viewBox='0 0 24 24'
    >
      <path fill='currentColor' d='M8 19V5l11 7l-11 7Z' />
    </svg>
  );

  const pauseSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 24 24'
    >
      <path fill='currentColor' d='M14 19V5h4v14h-4Zm-8 0V5h4v14H6Z' />
    </svg>
  );

  const resetSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='23'
      viewBox='0 0 14 14'
    >
      <g
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path d='M7 .5A6.5 6.5 0 1 1 .5 7a7.23 7.23 0 0 1 2-5' />
        <path d='m.5 2.5l2-.5l.5 2m4-.5v4l2.6 1.3' />
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
    <main className='font-atkinson flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-red-100'>
      <Header />
      <div className='mt-8 flex items-center justify-center'>
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

      <div className='flex items-center justify-center'>
        {isRunning ? (
          <FunctionalButton
            action={handlePause}
            icon={pauseSVG}
            color='bg-gray-400'
          />
        ) : (
          <FunctionalButton
            action={handleCountdown}
            icon={playSVG}
            color='bg-green-400'
          />
        )}

        <FunctionalButton
          action={handleReset}
          icon={resetSVG}
          color='bg-red-400'
        />
      </div>
      <Tasks />
      <Footer />
    </main>
  );
}

export default App;
