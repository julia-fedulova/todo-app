import React, {Component} from 'react'

import AppHeader from './AppHeader'
import SearchPanel from './SearchPanel'
import TodoList from './TodoList'
import ItemStatusFilter from './ItemStatusFilter'
import AddItemPanel from './AddItemPanel'

import './App.css'

class App extends Component {
  maxId = 100;

  constructor(){
    super()
    this.state= {
      todoData: [
        this.createTodoItem('Drink coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ],
      searchInput: '',
      filter: 'all'
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleToggleImportant = this.handleToggleImportant.bind(this)
    this.handleToggleDone = this.handleToggleDone.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  createTodoItem(text){
    return{
      label: text,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  handleDelete(id) {
    this.setState(state => {
      const index = state.todoData.findIndex(el => el.id === id)

      const newData = [...state.todoData.slice(0, index), ...state.todoData.slice(index+1)]
      return {
        todoData: newData
      }
    })
  }

  handleAdd(text) {
    const newItem = this.createTodoItem(text)
    
    this.setState(state => {
      const newData = [...state.todoData, newItem]
      return {todoData: newData}
    })
  }

  handleToggleImportant(id) {
    this.setState(state => {
      const index = state.todoData.findIndex(el => el.id === id)

      const oldItem = state.todoData[index]
      const newItem = {...oldItem, important: !oldItem.important}

      const newData = [...state.todoData.slice(0, index), newItem, ...state.todoData.slice(index+1)]
      return {
        todoData: newData
      }
    })
  }

  handleToggleDone(id) {
    this.setState(state => {
      const index = state.todoData.findIndex(el => el.id === id)

      const oldItem = state.todoData[index]
      const newItem = {...oldItem, done: !oldItem.done}

      const newData = [...state.todoData.slice(0, index), newItem, ...state.todoData.slice(index+1)]
      return {
        todoData: newData
      }
    })
  }

  search(items, input) {
    if(input.length === 0) {
      return items
    }
    return items.filter((item) => item.label.toUpperCase().includes(input.toUpperCase()))
  }

  handleSearch(inputValue) {
    this.setState({searchInput: inputValue})
  }

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default:
        return items
    }
  }

  handleFilterChange(filterValue) {
    this.setState({filter: filterValue})
  }

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length
    const todoCount = this.state.todoData.length - doneCount

    const visibleItems = this.filter(this.search(this.state.todoData, this.state.searchInput), this.state.filter)
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.handleSearch}/>
          <ItemStatusFilter 
            filter={this.state.filter}
            onFilterChange={this.handleFilterChange}
          />
        </div>
        <TodoList 
          todos={visibleItems} 
          onDelete={this.handleDelete}
          onToggleImportant={this.handleToggleImportant}
          onToggleDone={this.handleToggleDone}
        />
        <AddItemPanel onAdd={this.handleAdd}/>
      </div>
    )
  }
}

export default App
