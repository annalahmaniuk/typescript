import React, { useState } from 'react';

interface AddTaskProps {
  addTask: (title: string, category: string, dueDate: string, description: string, priority: string, reminder: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('Робота');
  const [dueDate, setDueDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<string>('Середній');
  const [reminder, setReminder] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && category && dueDate) {
      addTask(title, category, dueDate, description, priority, reminder);
      setTitle('');
      setCategory('Work');
      setDueDate('');
      setDescription('');
      setPriority('Medium');
      setReminder('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Назва завдання"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="select">
        <option value="Робота">Робота</option>
        <option value="Особисте">Особисте</option>
        <option value="Інше">Інше</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Опис завдання"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input"
        rows={4}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="select">
        <option value="Низький">Низький</option>
        <option value="Середній">Середній</option>
        <option value="Високий">Високий</option>
      </select>
      <input
        type="datetime-local"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        className="input"
      />
      <button type="submit" className="submit-button">Додати завдання</button>
    </form>
  );
};

export default AddTask;
