import React, { Component } from "react";
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

module.exports = {
  CollectionListRender
};