import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {firstName:'Dinu', lastName: 'Kumar'},
      company: 'Department of Posts',
    };
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hi {this.state.name.firstName} {this.state.name.lastName} , I work at {this.state.company}   </p>
        <button onClick={() => {
          this.setState(
            () => {
              return {
                name:{firstName: 'Mohan',lastName: 'Doss'},
              }; 
            }, 
            //optional this will run only setState complete his execution
            ()=> {
              console.log(this.state);
            });
          }}
        >
          Change name
        </button>
      </header>
    </div>
  );
}
}
export default App;
