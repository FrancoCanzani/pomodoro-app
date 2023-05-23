import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null); // Reference to the input element

  useEffect(() => {
    inputRef.current.focus(); // Focus on the input when the component mounts
  }, []);

  function handleAddTask(e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(), // Generate a unique id using uuidv4
      text: e.target.task.value,
    };
    if (newTask.text.trim() !== '') {
      setTasks([...tasks, newTask]);
      e.target.task.value = '';
    }
  }

  return (
    <>
      <div className='flex items-center justify-between border-b-2'>
        <h1 className='m-4 text-4xl font-black uppercase text-white'>Tasks</h1>
        <form onSubmit={handleAddTask} className='flex items-center'>
          <input
            className='bg-transparent text-xl font-semibold text-white outline-none'
            type='text'
            name='task'
            ref={inputRef}
          />
          <button type='submit' className='pointer active:translate-y-0.5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 20 20'
            >
              <path
                fill='white'
                d='M5.854 3.354a.5.5 0 1 0-.708-.708L3.5 4.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2ZM8.75 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm1.272 6.5a5.47 5.47 0 0 1 .353-1.5H8.75a.75.75 0 0 0 0 1.5h1.272ZM5.854 8.854a.5.5 0 1 0-.708-.708L3.5 9.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2Zm0 4.292a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0ZM20 15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z'
              />
            </svg>
          </button>
        </form>
      </div>
      <div className='my-4'>
        {tasks.length > 0 &&
          tasks.map((task) => (
            <div
              key={task.id}
              className='my-3 flex w-96 cursor-pointer items-center justify-between rounded-md border-l-4 bg-slate-950 px-8 py-3 text-xl font-medium text-white'
            >
              <p>{task.text}</p>
              <button
                onClick={() => {
                  setTasks(tasks.filter((a) => a.id !== task.id));
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 256 256'
                >
                  <path
                    fill='currentColor'
                    d='M216 48h-36V36a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24ZM100 36a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm88 168H68V72h120Zm-72-100v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0Zm48 0v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0Z'
                  />
                </svg>
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
