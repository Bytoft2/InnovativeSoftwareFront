

static class User {
    
    tags = []
    devices = []

    get tags(){
        return this.tags;
    }

    addTag(tag){
        for( var i = 0; i < this.tags.length; i++){ 
            if ( this.tags[i] === tag) { 
                return
            }
        }
        this.tags.push(tag);
    }

    removeTag(tag){
        for( var i = 0; i < this.tags.length; i++){ 
            if ( this.tags[i] === tag) { 
                arr.splice(i, 1); 
            }
        }
    }

    get devices(){
        return this.devices;
    }

    addDevice(device){
        for( var i = 0; i < this.devices.length; i++){ 
            if ( this.devices[i] === device) { 
                return
            }
        }
        this.devices.push(device);
    }

    removeTag(device){
        for( var i = 0; i < this.devices.length; i++){ 
            if ( this.devices[i] === device) { 
                arr.splice(i, 1); 
            }
        }
    }
    
}