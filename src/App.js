import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [
        {
          name: 'Linda',
          id: '1234',
        },
        {
          name: 'Frank',
          id: '12345',
        },
        { 
          name: 'Jack',
          id: '123456',
        },
      ],
    };
  }
  render() {
  return (
    <div className="App">
      {this.state.monsters.map((monster) => {
          return (
            <div key= {monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
    </div>
  );
  }
}
export default App;
