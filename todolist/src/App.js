import React, { Component } from 'react';
import TodoItem from './components/TodoItems/TodoItems'
import AddItems from './components/AddItems/AddItems'

class App extends Component {

  state = {
    items: [
      {id: 1, name: "sherif",  age: 21},
      {id: 2, name: "zayed",   age: 20},
      {id: 3, name: "ghareeb", age: 20}
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    });
    this.setState({items}); 
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center"> Todolist App</h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems add={this.addItem} />
          
      </div>
    );
  }
}

export default App;
