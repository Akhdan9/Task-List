import React from 'react'
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import Item from './components/Item';

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h3>Task List</h3>
      </div>
      <div className="list">
        <Item/>
      </div>
      <div>
        <FormInput/>
      </div>
    </div>
  );
}

export default App;
