import React, { Component } from "react";
import Request from 'react-http-request';
import { CollectionListRender } from './component';

class ResultEmbed extends Component {

  constructor(props){
    super(props);

    this.state={
      id: (props.id===undefined)?(""):props.id
    }
  }


  render(){
  let url = "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt"; 
  if(this.props.url !==""){
    url=this.props.url
  }
  else{
    url="https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt"; 
  }
  let error="";
  const changeTestName = (event) => {
      event.preventDefault();
      let newName = document.getElementById("testname").value;
      // debugger;
      this.setState({
        id: newName   
      })
    }
  // debugger;
return (

    <div key={url+this.state.id}>
      <div className="row">
      <form>
        <input id="testname" type="text" className="col s8 textinput offset-s1"></input>
        <button type="submit" className="btn waves-effect waves-light" onClick={changeTestName}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      </div>
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
              let id=this.state.id;
              // debugger;
            	if(result.error==undefined || result.error ==false) {

            	text= JSON.parse(result.text)
            	// debugger;
              if(id!==""){
                text=text.filter(function(item){
                  
                  // console.log(id);
                  return (id.toLowerCase()).match(item.name.toLowerCase())
                });
              }
            	}
            	else{
                // debugger;
                error = result.error.stack;
            	}
            	
            	return (
            		<div key={url+this.state.id}>
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
  }


module.exports = {
  ResultEmbed
};