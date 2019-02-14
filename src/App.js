import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
      task: '',
      id: '',
      completed: ''
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = event => {
    event.preventDefault();

    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTodo],
      task: '',
      id: '',
      completed: ''
    })
  }

  handleChanges = e => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <TodoList list={this.state.list} />
        <TodoForm
        addTodo={this.addTodo}
        handleChanges={this.handleChanges}
        name={this.state.task}
        />
      </div>
    );
  }
}

export default App;
