export default function TodoList() {
    return (
      <ul style={{
        backgroundColor: 'black',
        color: 'pink'
      }}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    );
  }
  
  // segundo codigo 

  import React from 'react';
import './TodoList.css';

export default function TodoList() {
  return (
    <ul className="todo-list">
      <li className="todo-item">Improve the videophone</li>
      <li className="todo-item">Prepare aeronautics lectures</li>
      <li className="todo-item">Work on the alcohol-fueled engine</li>
    </ul>
  );
}
