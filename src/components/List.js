import React, { Component } from 'react';
import './List.css';
export class List extends Component {
  toggleOnOff = (task) => {
    this.props.toggleTask(task);
  };
  render() {
    const { task } = this.props;
    return (
      <div className='taskLists'>
        <div className='listItem'>
          <p
            className={'task-' + (task.complete ? 'completed ' : 'complete')}
            onClick={() => this.toggleOnOff(task)}
          >
            {task.task}
          </p>
        </div>
      </div>
    );
  }
}

export default List;
