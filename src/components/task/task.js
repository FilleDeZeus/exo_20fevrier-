import React, { useState } from 'react';
export const Task = ({ user, tasks, onAssign, onToggle }) => {
  const [form, setForm] = useState({ task: '', completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign({ ...form, userId: user.id });
    setForm({ task: '', completed: false });
  };

  const handleToggle = (task) => {
    onToggle(task);
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task)} />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" name="task" value={form.task} onChange={(e) => setForm({ ...form, task: e.target.value })} />
        </label>
        <button type="submit">Assign</button>
      </form>
    </div>
  );
}

export default Task;