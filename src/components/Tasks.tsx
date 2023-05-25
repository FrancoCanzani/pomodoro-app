import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  text: string;
  style: string;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const uniqueId: string = uuidv4();

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: Task = {
      id: uniqueId, // Generate a unique id using uuidv4
      text: e.currentTarget.task.value,
      style: '!underline',
    };
    if (newTask.text.trim() !== '') {
      setTasks([...tasks, newTask]);
      e.currentTarget.task.value = '';
    }
  }

  function toggleUnderline(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            style: task.style === 'underline' ? '!underline' : 'underline',
          };
        }
        return task;
      })
    );
  }

  return (
    <>
      <div className='my-4 flex w-2/3 items-center justify-between border-b-2 border-black px-3 sm:w-1/2 md:w-1/3'>
        <h1 className='m-4 text-2xl font-black uppercase'>Tasks</h1>
        <form onSubmit={handleAddTask} className='flex items-center'>
          <input
            className='bg-transparent text-lg font-semibold outline-none'
            type='text'
            name='task'
            autoFocus
            aria-label='Task name'
          />
          <button
            type='submit'
            aria-label='Add task'
            className='pointer active:translate-y-0.5'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 20 20'
            >
              <path
                fill='currentColor'
                d='M5.854 3.354a.5.5 0 1 0-.708-.708L3.5 4.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2ZM8.75 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm1.272 6.5a5.47 5.47 0 0 1 .353-1.5H8.75a.75.75 0 0 0 0 1.5h1.272ZM5.854 8.854a.5.5 0 1 0-.708-.708L3.5 9.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2Zm0 4.292a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0ZM20 15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z'
              />
            </svg>
          </button>
        </form>
      </div>
      <div className='my-4 flex flex-col justify-center'>
        {tasks.length > 0 &&
          tasks.map((task) => (
            <div
              key={task.id}
              className='my-3 flex w-96 animate-fade-down items-center justify-between rounded-md border-l-4 border-l-red-600 bg-slate-950 px-8 py-3 text-xl font-medium text-white'
            >
              <p
                className='mr-10 cursor-pointer truncate text-2xl'
                style={{
                  textDecoration:
                    task.style === 'underline' ? 'line-through' : 'none',
                  color: task.style === 'underline' ? 'gray' : '',
                }}
                onClick={() => toggleUnderline(task.id)}
              >
                {task.text}
              </p>

              <button
                onClick={() => {
                  setTasks(tasks.filter((a) => a.id !== task.id));
                }}
                aria-label='Delete task'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1l1.4 1.4ZM7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Z'
                  />
                </svg>
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
