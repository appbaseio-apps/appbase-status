import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResultAll from "./resultall";

export default class App extends Component {

	constructor(props) {
		super(props);

		if (this.props.url === undefined) {
			this.state = {
				url: "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt",
				name: ""
			};
		}		else {
			this.state = {
				url: this.props.url,
				name: this.props.name
			};
		}
		// this.changeUrl = this.changeUrl.bind(this);
	}


	render() {
		const changeUrl = (event) => {
			event.preventDefault();
			let newUrl = document.getElementById("inputurl").value;
			// debugger;
			if (newUrl === "") {
				newUrl = "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt";
			}
			this.setState({
				url: newUrl,
				name: this.state.name
			});
		};

		return (
			<div className="margint01">
				<div className="row" >
					<div className="col s1 rightalign">url:</div>
					<form className="formstyle">
						<input id="inputurl" type="url" className="col s8 textinput offset-s1" />
						<button type="submit" className="btn waves-effect waves-light" onClick={changeUrl}>
							<i className="fa fa-play" aria-hidden="true" />
						</button>
					</form>


				</div>
				<div className="row">

					<div>
						<div className="block">
							<ResultAll url={this.state.url} key={this.state.url + this.state.name} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
