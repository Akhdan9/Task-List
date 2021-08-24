import React from 'react'
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import Item from './components/Item';

class App extends React.Component {
  state = {
    todos : [
      {
        id: 1,
        title: "Read a book"
      },
      {
        id: 2,
        title: "Good Way"
      }
    ]
  }
  
  render(){
    const { todos } = this.state;
  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h3>Task List</h3>
      </div>
      <div className="list">
        {todos.map(item =>

        <Item key={item.id} todo={item}/>
        )}
      </div>
      <div className="input-form">
        <FormInput/>
      </div>
    </div>
  );
  }
}

export default App;
