import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskInput from './TaskInput';
import TaskList from './TaskList';

interface Task {
  id: string;
  text: string;
  style: 'underline' | 'none';
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const uniqueId: string = uuidv4();
    
    const newTask: Task = {
      id: uniqueId, // Generate a unique id using uuidv4
      text: e.currentTarget.task.value,
      style: 'none',
    };
    if (newTask.text.trim() !== '') {
      setTasks([newTask, ...tasks]);
      e.currentTarget.task.value = '';
    }
  }

  function toggleUnderline(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            style: task.style === 'underline' ? 'none' : 'underline',
          };
        }
        return task;
      })
    );
  }

  return (
    <section className='flex w-96 flex-col items-center justify-center px-3'>
      <TaskInput handleAddTask={handleAddTask} />
      <TaskList
        toggleUnderline={toggleUnderline}
        tasks={tasks}
        setTasks={setTasks}
      />
    </section>
  );
}
