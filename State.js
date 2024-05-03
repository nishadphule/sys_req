import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Calculator from './Calculator';
//import PropTypes from "prop-types"

class ReactState extends React.Component{
  constructor(){
    super();
    this.state = {init : "Welcome" , name : "Nishad"};
  }
  render(){
    return(
      <div>
        <h1>Hey {this.state.init} {this.state.name}</h1>
        <button onClick = {this.changeValues}>Change Values</button>
      </div>
    );
  }
  changeValues = () => {
    this.setState({init : "Hey", name : "Nishad"});
  }
}

var r = ReactDOM(document.getElementById("root"));
r.render(<ReactState/>);
