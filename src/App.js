import { useState,useEffect } from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './search-box/search-box.components';
import './App.css';

const App = ()=> {
  const [searchField, setSearchField] = useState('');
  //console.log({searchField}); //returns as object
  //console.log(searchField); //returns as string
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  //const [stringField, setStringField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
    
    },[monsters,searchField]);
  /* const onStringChange = (event) => {
    setStringField(event.target.value);
  } */
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  
  //console.log(filterMonsters);

  return(
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox 
        className = 'monsters-search-box'
        onChangeHandler= {onSearchChange}  
        placeholder = 'search monsters' 
      />      
      <CardList monsters={filteredMonsters}/>  
    </div> 
  );
}

/* class App extends Component {
  
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
    </div> 
  );
  }
} */
export default App;
