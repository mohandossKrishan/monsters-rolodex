import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : '',
      
    };
    console.log('Constructor');
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(()=> {
      return {searchField};
    });
  }
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>
      this.setState(
        ()=> {
          return {monsters: users};
        },
        () => {
          console.log(this.state);
        }
      ) 
    )
  }
  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);

    });
  console.log('render');
  return (
    <div className="App">
      <input 
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={onSearchChange}

      />
      {filterMonsters.map((monster) => {
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
