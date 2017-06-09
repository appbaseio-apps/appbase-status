import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ResultAll } from './resultall'

export default class App extends Component {

	constructor(props){
  	super(props);

  	if(this.props.url == undefined){
  		this.state = {
  			url: "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt"
  		}
		}
		else {
			this.state = {
				url: this.props.url
			}
		}
		// this.changeUrl = this.changeUrl.bind(this);
	}

	

	render(){
		const changeUrl= (event) => {

			event.preventDefault();
			let newUrl = document.getElementById("inputurl").value;
			// debugger;
			this.setState({
				url: newUrl
			
			})
		}
		return(
			<div className="block">
			<div className="row" >
				<div className="col s1 rightalign">url:</div>
				<form>
				<input id="inputurl" type="url" className="col s8 textinput offset-s1"></input>
				<button type="submit" className="btn waves-effect waves-light" onClick={changeUrl}>
					<i className="fa fa-play" aria-hidden="true"></i>
				</button>
				</form>
			</div>
			<div>
				<ResultAll url={this.state.url} key={this.state.url}/>
				
			</div>
			</div>
			);
		
	}
}

ReactDOM.render(<App />, document.getElementById("app"));