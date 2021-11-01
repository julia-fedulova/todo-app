import React from 'react'

import TodoListItem from './TodoListItem'
import './TodoList.css'

function TodoList (props) {
  const elements = props.todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps } 
        onDelete={()=>props.onDelete(id)}
        onToggleImportant={() => props.onToggleImportant(id)}
        onToggleDone={() => props.onToggleDone(id)}
        />
      </li>
    )
  })

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}

export default TodoList;
