import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      inventory: []
    }
    this.getAllInv = this.getAllInv.bind(this);
  }

  
  componentDidMount(){
    this.getAllInv();
  }
  
  getAllInv() {
    Axios.get('/api/inventory')
    .then( res => {
      console.log(res);
      this.setState({inventory: res.data})
    })
    .catch(err => console.log(err))
  }


  render(){

    return (
      <div className="App">
        <Header/>
        <div className='main-body'>
          <Dashboard inventory={this.state.inventory}
                     getAllInvFn={this.getAllInv}/>
          <Form getAllInvFn={this.getAllInv}/>
        </div>
      </div>
    );
  }
  
}


