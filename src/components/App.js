import React, {Component, useState} from "react";
import '../styles/App.css';
class App extends Component {

constructor(props) {
    super(props);
    this.state = {flag: false};
  };
	
  abc(){
	this.setState({flag: true})
   }
   render() {
	return(
		<div id="main">
			{/* Do not remove the main div */}
			{this.state.flag&&<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
			<button id="click" onClick={()=>this.abc()}>Click Me</button>	
		</div>
	);
   }
}
export default App;
