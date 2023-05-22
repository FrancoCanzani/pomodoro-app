export default function TimerSelector({ timerType, setCountdown, time }) {
  return (
    <button
      onClick={() => setCountdown({ ...time })}
      className='text-md mx-2 my-6 rounded-md bg-slate-100 px-3 py-2 font-bold uppercase animate-once focus:bg-sky-600 focus:text-white active:translate-y-0.5'
    >
      {timerType}
    </button>
  );
}
