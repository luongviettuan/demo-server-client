import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    greeting : ''
  }
  componentDidMount(){
    console.log('mount');
    axios.get('http://localhost:5000/api/helloworld ')
      .then(result => {
        this.setState({greeting: result.data.sayHi});
        console.log(result)
        }
      );
      
      
  }
  render() {
    return (
      <div className="App">
        <h1>welcome to reactjs</h1>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default App;
