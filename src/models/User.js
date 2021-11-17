import * as React from 'react';

export default class User extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            tags: [],
            devices: []
        }
    }


    getTags(){
        return this.state.tags;
    }

    addTag(tag){
        for( var i = 0; i < this.state.tags.length; i++){ 
            if ( this.state.tags[i] === tag) { 
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

    getDevices(){
        return this.state.devices;
    }

    addDevice(device){

        for( var i = 0; i < this.state.devices.length; i++){ 
            if ( this.state.devices[i].name === device.name) { 
                return
            }
        }
        this.state.devices.push(device);
    }

    removeTag(device){
        for( var i = 0; i < this.state.devices.length; i++){ 
            if ( this.state.devices[i] === device) { 
                arr.splice(i, 1); 
            }
        }
    }
    
}