import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Filters from './components/Filters';
import './styles/App.css';

interface Task {
  id: number;
  title: string;
  category: string;
  isCompleted: boolean;
  dueDate: string;
  description: string;
  priority: string; 
  reminder: string; 
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('asc'); 


  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Зберігаємо дані в localStorage при зміні списку завдань
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }
  }, [tasks]);

  const addTask = (title: string, category: string, dueDate: string, description: string, priority: string, reminder: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      category,
      isCompleted: false,
      dueDate,
      description,
      priority,
      reminder,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); 
  };

  const editTask = (id: number, newTitle: string, newCategory: string, newDueDate: string, newDescription: string, newPriority: string, newReminder: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, title: newTitle, category: newCategory, dueDate: newDueDate, description: newDescription, priority: newPriority, reminder: newReminder }
        : task
    );
    setTasks(updatedTasks);
  };

  const filterTasks = (category: string) => {
    setFilteredCategory(category); 
  };

  const sortTasks = (order: string) => {
    setSortOrder(order);
  };

  const filteredTasks =
    filteredCategory === 'All' ? tasks : tasks.filter((task) => task.category === filteredCategory);

  const sortedTasks = filteredTasks.sort((a, b) => {
    return sortOrder === 'asc'
      ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime() // Для ASC
      : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime(); // Для DESC
  });

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <AddTask addTask={addTask} />
      <Filters filterTasks={filterTasks} sortTasks={sortTasks} />
      <TaskList
        tasks={sortedTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
