interface TimerSelectorProps {
  timerType: string;
  setCountdown: React.Dispatch<
    React.SetStateAction<{ minutes: number; seconds: number }>
  >;
  time: { minutes: number; seconds: number };
  currentTimer: string;
  setCurrentTimer: React.Dispatch<React.SetStateAction<string>>;
}

export default function TimerSelector({
  timerType,
  setCountdown,
  time,
  currentTimer,
  setCurrentTimer,
}: TimerSelectorProps) {
  function handleTimerSelector() {
    setCountdown({ ...time });
    setCurrentTimer(timerType);
  }

  return (
    <button
      onClick={handleTimerSelector}
      className={`text-md mx-2 my-8 rounded-md px-3 py-2 font-bold uppercase ${
        currentTimer === timerType ? 'bg-black text-white' : ''
      } hover:bg-black hover:text-white focus:text-white active:translate-y-0.5`}
    >
      {timerType}
    </button>
  );
}
