import { useState } from 'react';

import Timer from './components/Timer';
import FunctionalButton from './components/FunctionalButton';
import TimerSelector from './components/TimerSelector';
import Tasks from './components/tasks/Tasks';
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
    <main className='font-atkinson flex min-h-screen min-w-full flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-sky-950 text-gray-50'>
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
            text={'pause'}
            color={'bg-gray-600'}
            border={'rounded-l-md'}
            label='Pause timer'
          />
        ) : (
          <FunctionalButton
            action={handleCountdown}
            text={'play'}
            color={'bg-green-600'}
            border={'rounded-l-md'}
            label='Play timer'
          />
        )}

        <FunctionalButton
          action={handleReset}
          text={'reset'}
          color={'bg-red-600'}
          border={'rounded-r-md'}
          label='Reset timer'
        />
      </div>
      <Tasks />
      <Footer />
    </main>
  );
}

export default App;
