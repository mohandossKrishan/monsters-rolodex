import { Component } from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './search-box/search-box.components';
import './App.css';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : '',
      
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(()=> {
      return {searchField};
    });
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>
      this.setState(
        ()=> {
          return {monsters: users};
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
  return (
 
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <SearchBox 
        onChangeHandler= {onSearchChange}  
        placeholder = 'search monsters' 
        className = 'search-box'
        />      
      <CardList monsters={filterMonsters}/>

{/*       {      {filterMonsters.map((monster) => {
          return (
            <div key= {monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} } */}
    </div> 
  );
  }
}
export default App;
