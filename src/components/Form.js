import React, { Component } from 'react';
import './Form.css';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      complete: false,
      id: 0,
    };
  }
  handleInputAreaChanged = (event) => {
    this.setState({ task: event.target.value });
  };
  sendTask = () => {
    this.setState({ id: this.state.id + 1 });
    const task = this.state;
    if (this.state.task === '') {
      return;
    } else {
      this.props.insertTask(task);
    }
    this.setState({ task: '' });
  };
  clearCompleted = () => {
    this.props.clearCompleted();
  };
  render() {
    return (
      <div className='inputcontainer'>
        <input
          onChange={this.handleInputAreaChanged}
          type='text'
          placeholder='Enter task...'
          value={this.state.task}
          className='inputBox'
        />
        <button className='submitButton' onClick={() => this.sendTask()}>
          Submit
        </button>
        <button
          className='clearCompletedButton'
          onClick={() => this.clearCompleted()}
        >
          Clear Completed
        </button>
      </div>
    );
  }
}

export default Form;
