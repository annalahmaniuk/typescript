import React from 'react';
import { Task } from './types'; 
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTitle: string, newCategory: string, newDueDate: string, newDescription: string, newPriority: string, newReminder: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
