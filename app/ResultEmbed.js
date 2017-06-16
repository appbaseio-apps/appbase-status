import React, { Component } from "react";
import Request from "react-http-request";
import { CollectionListRender } from "./component";

export default class ResultEmbed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: (props.id === undefined) ? ("") : props.id
		};
	}
	render() {
		const url = this.props.url;
		const changeTestName = (event) => {
			event.preventDefault();
			const newName = document.getElementById("testname").value;
			this.setState({
				id: newName
			});
		};
		return (
			<div key={url + this.state.id}>
				<div className="row">
					<div className="col s6 offset-s7">
                    <form>
                        <input id="testname" type="text" className="col s6 textinput offset-s1" />
                        <button type="submit" className="btn mybtn waves-effect waves-light" onClick={changeTestName}>
                            <i className="fa fa-search" aria-hidden="true" />
                        </button>
                    </form>
                    </div>
                </div>
				<Request
					url={url}
					method="get"
					accept="application/json"
					verbose={false}
				>
					{
	({ error, result, loading }) => {
		if (loading) {
			return (
				<div className="progress">
					<div className="indeterminate" />
				</div>);
		} else if (result) {
			let text = "";
			const id = this.state.id;
			if (result.error === undefined || result.error === false) {
				text = JSON.parse(result.text);
				if (id !== "") {
					text = text.filter(item =>
		(id.toLowerCase()).match(item.name.toLowerCase()));
				}
			} else {
				error = result.error.stack;
			}
			return (
				<div key={url + this.state.id}>
					<div className="redC">{error}</div>
					{(text !== "") ? <CollectionListRender list={text} /> : (<div />)}
				</div>
			);
		}
		return (<div className="redC">Error: check console for errors!</div>);
	}
			}
				</Request>
			</div>
		);
	}
}

ResultEmbed.propTypes = {
	url: React.PropTypes.string.isRequired,
	id: React.PropTypes.string
};

React.PropTypes.oneOfType([
	React.PropTypes.string
]);

// Default props value
ResultEmbed.defaultProps = {
	id: ""
};