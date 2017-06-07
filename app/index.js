import React, { Component } from "react";
import ReactDOM from "react-dom";
import Request from 'react-http-request';
import Collapsible from 'react-collapsible';

const CollectionRender = ({element,index}) => {
	let bgclass=(element.status)?"greenC":"redC";
	let triggerElement = (element.status)?(
		<div className="my-collapsible-header row">
			<div className="col s1"><i className="fa fa-check greenC" aria-hidden="true"></i></div>
			<div className="col s3"><strong>{element.name}</strong></div>
			<div className="col s4">{element.endpoint}</div>
			<div className="col s2">{element.timestamp}</div>
			<div className="col s2">{element.took}</div>
		</div>
		    
	):(
		<div className="my-collapsible-header row" >
			<div className="col s1"><i className="fa fa-times redC" aria-hidden="true"></i></div>
			<div className="col s3"><strong>{element.name}</strong></div>
			<div className="col s4">{element.endpoint}</div>
			<div className="col s2">{element.timestamp}</div>
			<div className="col s2">{element.took}</div>
		</div>
		    
	);

	return (
	<div className="margin05" key={element.id}>
	<Collapsible trigger={triggerElement}>
	<div className="my-collapsible-body"><span>{element.description}</span></div>
	</Collapsible>
	</div>
	);
}

const CollectionListRender = ({list}) => {
	
	return (
		 <div className="collapsible">
            {list.map(
                  (t, index)=>( <CollectionRender element={t} index={index}/>)
              )}
            </div>
	        
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
            	return (
            		<div>
            		<h3>Result All</h3>
            		<CollectionListRender list={text}/>
            		</div>
            		)
            }
          }
        }
      </Request>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));