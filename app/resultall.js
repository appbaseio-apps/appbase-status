import React, { Component } from "react";
import Request from 'react-http-request';
import { CollectionListRender } from './component';
 
const ResultAll = (props) => {
  let url = "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt"; 
  let error="";
  if(props.url!==""){
    url = props.url;
  }
return (

    <div key={url}>
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