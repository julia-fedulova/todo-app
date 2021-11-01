import React from 'react'

import './TodoListItem.css'

function TodoListItem(props) {
  let classNames = 'todo-list-item'
  if(props.done) {
    classNames += ' done'
  }

  if (props.important) {
    classNames += ' important'
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={props.onToggleDone}
      >
        {props.label}
      </span>
  
      <button 
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={props.onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button 
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={props.onDelete}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  )
}

export default TodoListItem
