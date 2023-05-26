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
    <section className='flex w-96 flex-col items-center justify-center'>
      <form onSubmit={handleAddTask} className='flex w-full items-center'>
        <fieldset className='w-full rounded-lg border-4 border-black'>
          <legend className='px-2 text-center text-2xl font-black uppercase'>
            Tasks
          </legend>
          <div className='flex w-full items-center justify-center p-2'>
            {' '}
            <input
              className='w-full bg-transparent text-lg font-semibold outline-none'
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
                width='32'
                height='32'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M19 6a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H7.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L7.41 14H17a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1Z'
                />
              </svg>
            </button>
          </div>
        </fieldset>
      </form>
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
    </section>
  );
}
