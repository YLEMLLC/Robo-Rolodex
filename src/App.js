import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/searchBox/search-box.component.jsx'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      robos: [],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
      res.json().then((data) => this.setState({ robos: data }))
    )
  }
  render() {
    const { robos, searchField } = this.state
    const filterRobos = robos.filter((robo) =>
      robo.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>ROBO ROLODEX</h1>
        <SearchBox
          placeholder='ROBO SEARCH'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList robos={filterRobos} />
      </div>
    )
  }
}
