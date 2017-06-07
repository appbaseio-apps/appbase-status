import React, { Component } from "react";
import ReactDOM from "react-dom";
import Request from 'react-http-request';

const CollectionRender = ({element,index}) => {
	let bgclass=(element.status)?"greenC":"redC";
	return (
	<div key={element.id}>
	{(element.status)?(
		<div className="collapsible-header greenC">
			<div className="block">{element.name}</div>
			<div className="block">{element.timestamp}</div>
			<div className="block">{element.took}</div>
		</div>
		    
	):(
		<div className="collapsible-header redC" >
			<div className="block">{element.name}</div>
			<div className="block">{element.timestamp}</div>
			<div className="block">{element.took}</div>
		</div>
		    
	)}
	<div className="collapsible-body"><span>{element.description}</span>
	</div>
	</div>
	);
}

const CollectionListRender = ({list}) => {
	
	return (
		 <ul className="collapsible" data-collapsible="accordion">
            {list.map(
                  (t, index)=>( <CollectionRender element={t} index={index}/>)
              )}
            </ul>
	        
	    );
	
}
 
export default class App extends Component {
  render() {
    return (
      <Request
        url='https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } 

            else {
            	let text= JSON.parse(result.text)
            	return (<CollectionListRender list={text}/>)
            }
          }
        }
      </Request>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));