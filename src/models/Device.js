import React, { Component } from "react";

export default class Device extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        name: props.name,
        id: props.id, //The id we need to send with the request
        tags: props.tags,
        on: false,
        };
    }

    getTags(){
        return this.state.tags;
    }

    getName(){
        return this.state.name;
    }

    addTag(tag){
        for( var i = 0; i < this.state.tags.length; i++){ 
            if ( this.state.tags[i].name === tag.name) { 
                return
            }
        }
        this.state.tags.push(tag);
    }

    removeTag(tag){
        for( var i = 0; i < this.state.tags.length; i++){ 
            if ( this.state.tags[i] === tag) { 
                arr.splice(i, 1); 
            }
        }
    }

    rename(name){
        this.state.name = name;
    }

    reroute(id){
        this.state.id = id;
    }

}