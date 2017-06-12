import React, { Component } from "react";
import Request from 'react-http-request';
import { CollectionListRender } from './component';

const ResultEmbed = (props) => {
  let url = "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt"; 
  let error="";
  let id="";
  // debugger;
  if(props.url!==""){
    url = props.url;
  }
  if(props.name!==""){
    id = props.id;
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
              let filteredlist="";
              // debugger;
            	if(result.error==undefined || result.error ==false) {

            	text= JSON.parse(result.text)
            	// debugger;
              if(id!==undefined){
                text=text.filter(function(item){
                  console.log(id);
                  return RegExp('\\b'+ id.toLowerCase() +'\\b').test(item.name.toLowerCase())
                });
              }
            	}
            	else{
                // debugger;
                error = result.error.stack;
            	}
            	
            	return (
            		<div key={url+id}>
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
  ResultEmbed
};