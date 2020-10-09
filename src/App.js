import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import routes from './routes';

export default class App extends Component {
  constructor(){
    super();
    
  }



  render(){

    return (
      <div className="App">
        <Header/>
        <div className='main-body'>
          {/* <Dashboard inventory={this.state.inventory}
                     getAllInvFn={this.getAllInv}
                     editButtonFn={this.editButton}/>
          <Form getAllInvFn={this.getAllInv}
                currentSelect={this.state.currentSelect}
                editOnFormFn={this.editOnForm}/> */}
        </div>
        {routes}
      </div>
    );
  }
  
}


