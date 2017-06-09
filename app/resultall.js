import React, { Component } from "react";
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
 
const ResultAll = (props) => {
  let url = "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt"; 
  let error="";
  if(props.url!==""){
    url = props.url;
  }
return (

    <div key={props.key}>
      <Request
        url={url}
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return ( 
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>);
            } 

            else if(result){
            	let text= "";
              // debugger;
            	if(result.error==undefined || result.error ==false) {

            	text= JSON.parse(result.text)
            	// debugger;
            	}
            	else{
                // debugger;
                error = result.error.stack;
            	}
            	
            	return (
            		<div key={url}>
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>
            		<div className="redC">{error}</div>
            		{(text!=="")?<CollectionListRender list={text}/>:(<div />)}
            		</div>
            		)
            }
            else {

            	return (<div className="redC">Error: check console for errors!</div>);
            }
          }
        }
      </Request>
      </div>
      );
    }


module.exports = {
  ResultAll
};