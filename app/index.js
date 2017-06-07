import React, { Component } from "react";
import ReactDOM from "react-dom";
import Request from 'react-http-request';
 
export default class App extends Component {
  render() {
    return (
      <Request
        url='https://slack-redir.net/link?url=https%3A%2F%2Fappbase-apifrontend-funtests.s3.amazonaws.com%2FFunctionalTestResult_es2.txt'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
      </Request>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));