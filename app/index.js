import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ResultAll } from './resultall';
import { ResultEmbed } from './resultembed';

export default class App extends Component {

	constructor(props){
  	super(props);

  	if(this.props.url == undefined){
  		this.state = {
  			url: "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt",
  			name: ""
  		}
		}
		else {
			this.state = {
				url: this.props.url,
				name: this.props.name
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
				url: newUrl,
				name: this.state.name
			})
		}

		const changeTestName = (event) => {
			event.preventDefault();
			let newName = document.getElementById("testname").value;
			// debugger;
			this.setState({
				url: this.state.url,
				name: newName		
			})
		}
		return(
			<div className="margint01">
			<div className="row" >
						<div className="col s1 rightalign">url:</div>
						<form className="formstyle">
						<input id="inputurl" type="url" className="col s8 textinput offset-s1"></input>
						<button type="submit" className="btn waves-effect waves-light" onClick={changeUrl}>
							<i className="fa fa-play" aria-hidden="true"></i>
						</button>
						</form>
						<div className="col s1 rightalign">test name:</div>
						<form className="formstyle">
						<input id="testname" type="text" className="col s8 textinput offset-s1"></input>
						<button type="submit" className="btn waves-effect waves-light" onClick={changeTestName}>
							<i className="fa fa-search" aria-hidden="true"></i>
						</button>
					</form>
					</div>
			<div className="row">
				<div className="col s6">
					<div className="block">
						<ResultAll url={this.state.url} key={this.state.url}/>
					</div>
				</div>
				<div className="col s6">
					<div className="block">
						<ResultEmbed url={this.state.url} id={this.state.name} key={this.state.url+this.state.name}/>
					</div>
				</div>
			</div>
			</div>
			);
		
	}
}

ReactDOM.render(<App />, document.getElementById("app"));