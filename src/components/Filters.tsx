import React from 'react';

interface FiltersProps {
  filterTasks: (category: string) => void;
  sortTasks: (order: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ filterTasks, sortTasks }) => {
  return (
    <div className="filters">
      <button onClick={() => filterTasks('All')} className="filter-button">
        Усі
      </button>
      <button onClick={() => filterTasks('Робота')} className="filter-button">
        Робота
      </button>
      <button onClick={() => filterTasks('Особисте')} className="filter-button">
        Особисте
      </button>
      <button onClick={() => filterTasks('Інше')} className="filter-button">
        Інше
      </button>
      <button onClick={() => sortTasks('asc')} className="filter-button">
        Сортувати за датою (по зростанню)
      </button>
      <button onClick={() => sortTasks('desc')} className="filter-button">
        Сортувати за датою (по зменшенню)
      </button>
    </div>
  );
};

export default Filters;
