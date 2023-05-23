export default function TimerSelector({
  timerType,
  setCountdown,
  time,
  currentTimer,
  setCurrentTimer,
}) {
  // Fn to switch color of timer selector bg and time
  function handleTimerSelector() {
    setCountdown({ ...time });
    setCurrentTimer(timerType);
  }

  return (
    <button
      onClick={handleTimerSelector}
      className={`text-md mx-2 my-6 rounded-md px-3 py-2 font-bold uppercase ${
        currentTimer === timerType ? 'bg-sky-600 text-white' : 'bg-slate-100'
      } animate-once focus:bg-sky-600 focus:text-white active:translate-y-0.5`}
    >
      {timerType}
    </button>
  );
}
