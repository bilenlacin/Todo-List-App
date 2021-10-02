import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { insertTask, toggleTask, clearCompleted } from './action-creators';
import React, { Component } from 'react';

class App extends Component {
  displayTasks = () => {
    const { tasks } = this.props;
    return tasks.map((task) => {
      return (
        <List task={task} toggleTask={this.props.toggleTask} key={task.id} />
      );
    });
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Header />
          <Form
            insertTask={this.props.insertTask}
            tasks={this.props.tasks}
            clearCompleted={this.props.clearCompleted}
          />
          {this.displayTasks()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { tasks } = state.todoReducer;
  return { tasks };
};

export default withRouter(
  connect(mapStateToProps, {
    insertTask: insertTask,
    toggleTask: toggleTask,
    clearCompleted: clearCompleted,
  })(App)
);
