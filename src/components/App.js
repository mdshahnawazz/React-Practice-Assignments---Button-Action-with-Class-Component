import React, {Component, useState} from "react";
import '../styles/App.css';
class App extends Component {

constructor(props) {
    super(props);
    this.state = {isClicked: false};


 

this.state = this.printPara.bind(this);


 

  };
  printPara = () => {
	this.setState({isClicked: true})
   }
   render() {
	return(
		<div id="main">
			<button id="click" onClick={this.printPara}>Click Me</button> - calling class function  with this
			{this.state.isClicked ? <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>: null}
		</div>
	);
   }
}
export default App;
