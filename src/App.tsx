import { useState } from 'react';

import Timer from './components/Timer';
import FunctionalButton from './components/FunctionalButton';
import TimerSelector from './components/TimerSelector';
import Tasks from './components/Tasks';

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
    <main className='font-atkinson flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-sky-900'>
      <h1 className='py-8 text-5xl font-bold uppercase text-white'>
        Focus Mate
      </h1>
      <div className='flex items-center justify-center'>
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
            text='Pause'
            color='bg-gray-400'
          />
        ) : (
          <FunctionalButton
            action={handleCountdown}
            text='Play'
            color='bg-green-400'
          />
        )}

        <FunctionalButton
          action={handleReset}
          text='Reset'
          color='bg-red-400'
        />
      </div>
      <Tasks />
    </main>
  );
}

export default App;
