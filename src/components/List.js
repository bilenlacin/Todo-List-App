import React, { Component } from 'react';
import './List.css';
export class List extends Component {
  toggleOnOff = (task) => {
    this.props.toggleTask(task);
  };
  render() {
    const { task } = this.props;
    return (
      <div className='taskList'>
        <td className='listItem' onClick={() => this.toggleOnOff(task)}>
          <input type='checkbox' checked={task.complete} />
          <span
            for='task'
            id={'task-' + (task.complete ? 'completed' : 'complete')}
          >
            {task.task}
          </span>
        </td>
      </div>
    );
  }
}

export default List;
