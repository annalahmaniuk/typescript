import React, { useState } from 'react';
import { Task } from './types';

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTitle: string, newCategory: string, newDueDate: string, newDescription: string, newPriority: string, newReminder: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(task.title);
  const [newCategory, setNewCategory] = useState<string>(task.category);
  const [newDueDate, setNewDueDate] = useState<string>(task.dueDate);
  const [newDescription, setNewDescription] = useState<string>(task.description);
  const [newPriority, setNewPriority] = useState<string>(task.priority);
  const [newReminder, setNewReminder] = useState<string>(task.reminder);

  const handleEditSubmit = () => {
    editTask(task.id, newTitle, newCategory, newDueDate, newDescription, newPriority, newReminder);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-task-form">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="input"
          />
          <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="select">
            <option value="Робота">Робота</option>
            <option value="Особисте">Особисте</option>
            <option value="Інше">Інше</option>
          </select>
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            className="input"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="input"
            rows={4}
          />
          <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)} className="select">
            <option value="Низький">Низький</option>
            <option value="Середній">Середній</option>
            <option value="Високий">Високий</option>
          </select>
          <input
            type="text"
            value={newReminder}
            onChange={(e) => setNewReminder(e.target.value)}
            className="input"
            placeholder="Нагадування"
          />
          <button onClick={handleEditSubmit} className="submit-button">Зберегти</button>
        </div>
      ) : (
        <>
          <div className="task-title">{task.title}</div>
          <div className="task-category">{task.category}</div>
          <div className="task-due-date">{task.dueDate}</div>
          <div className="task-description">{task.description}</div>
          <div className="task-priority">Пріоритет: {task.priority}</div>
          <div className="task-reminder">Нагадування: {task.reminder}</div>
          <div className="task-actions">
            <button onClick={() => toggleTaskCompletion(task.id)} className="mark-complete">
              {task.isCompleted ? 'Відмінити виконання' : 'Відмітити як виконане'}
            </button>
            <button onClick={() => deleteTask(task.id)} className="delete-button">Видалити</button>
            <button onClick={() => setIsEditing(true)} className="edit-button">Редагувати</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
