import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/searchbox.component';




class App extends Component{
  constructor(){
    super();

    this.state ={
      monsters:[
        // {
        //   id:1,
        //   name:'Banshee'
        // },
        // {
        //   id:2,
        //   name:'Dracula'
        // },
        // {
        //   id:3,
        //   name:'Frankeinstein'
        // }
      ],
      searchField:""
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result=>result.json())
    .then(user=>this.setState({monsters:user}));
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return(
      
      <div className="App">
        <h2>React Monsters</h2>
        <SearchBox 
          placeholder="search for monsters"
          handleChange={e => this.setState({searchField:e.target.value})}
        />
      <CardList monsters={filteredMonsters} />
      
    </div>
    )
  }
}

export default App;