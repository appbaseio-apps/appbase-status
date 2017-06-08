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

  constructor(props){
  	super(props);

  	if(this.props.url == undefined){
  		this.state = {
  			url: "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt"
  		}
  	}
  	else {
  		this.state = {
  			url: this.props.url
  		}
  	}
  	this.changeUrl = this.changeUrl.bind(this);
  }

  changeUrl(event){

  	event.preventDefault();
  	let newUrl = document.getElementById("inputurl").value;
  	debugger;
  	this.state = {
  		url: newUrl
  	}
  }

  render() {
    return (
    <div className="block">
		<div className="row">
			<div className="col s1 rightalign">url:</div>
			<input id="inputurl" type="url" className="col s8 textinput offset-s1"></input>
			<button className="btn waves-effect waves-light" onClick={this.changeUrl}>
				<i className="fa fa-play" aria-hidden="true"></i>
			</button>
		</div>
		<div key={this.state}>
      <Request
        url={this.state.url}
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div key={this.state.url}>loading...</div>;
            } 

            else if(result){
            	let text= "";
            	try {
            	text= JSON.parse(result.text)
            	debugger;
            	}
            	catch(e){
            		this.state={
            			url: this.state.url,
            			error: e
            		}
            	}
            	
            	return (
            		<div key={this.state.url}>
            		{this.state.error}
            		<CollectionListRender list={text}/>
            		</div>
            		)
            }
            else {

            	return (<div>wops!</div>);
            }
          }
        }
      </Request>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));