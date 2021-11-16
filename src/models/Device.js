class Device {
    constructor(props){
        this.name = props.name;
        this.id = props.id; //The id we need to send with the request
        this.tags = props.tags;
    }

    get tags(){
        return this.tags;
    }

    get name(){
        return this.name;
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

    rename(name){
        this.name = name;
    }

    reroute(id){
        this.id = id;
    }

}