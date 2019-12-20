// import logo from './logo.svg';
// import './App.css';
import './Home.css';
import React, { Component } from 'react';

class App extends Component {  

  // konsumsi API API 
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true
    }
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({items: data, isLoading:false }))
  }
  
  render() {
    const {items, isLoading} = this.state


    return isLoading ? <p>loading . . .</p> : <div className="container">
      <div className="center">
          <h2 className="content-title">API dari JSON Placeholder</h2>
          <ul>
            {items.map((item, index) => <li key={index}>{item.name}</li> )}
          </ul>
          <br/><br/>
          <hr/>
      </div>
    </div>;
  }
}

export default App;