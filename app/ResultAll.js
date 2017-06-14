import React, { Component } from "react";
import Request from "react-http-request";
import { CollectionListRender } from "./component";

export default class ResultAll extends Component {

	render() {
		const url = this.props.url;
		return (

			<div key={url}>
				<Request
					url={url}
					method="get"
					accept="application/json"
					verbose={true}
				>
					{
					({ error, result, loading }) => {
						if (loading) {
							return (
								<div className="progress">
									<div className="indeterminate" />
								</div>);
						}	else if (result) {
							let text = "";
							if (result.error === undefined || result.error === false) {
								text = JSON.parse(result.text);
							}            	else {
								error = result.error.stack;
							}

							return (
								<div key={url}>
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

ResultAll.propTypes = {
	url: React.PropTypes.string.isRequired
};

React.PropTypes.oneOfType([
	React.PropTypes.string
]);
