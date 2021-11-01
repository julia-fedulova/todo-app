import React, {Component} from 'react'
import './AddItemPanel.css'

class AddItemPanel extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({text: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({text: ''})
    }

    render(){
        return(
            <form 
                className="add-item-panel"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new todo"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        )
    }
}

export default AddItemPanel