import React, { Component } from "react";

export default class Device extends React.Component {

    constructor(props) {
        super(props);

        this.deviceId = "",
            this.manufacturer = "",
            this.name = "",
            this.on = "",
            this.tags = [],
            this.powerUnitId = ""
    }


    getTags() {
        return this.tags;
    }

    getName() {
        return this.name;
    }

    addTag(tag) {
        for (var i = 0; i < this.tags.length; i++) {
            if (this.tags[i].name === tag.name) {
                return
            }
        }
        this.tags.push(tag);
    }

    removeTag(tag) {
        for (var i = 0; i < this.tags.length; i++) {
            if (this.tags[i] === tag) {
                arr.splice(i, 1);
            }
        }
    }

    rename(name) {
        this.name = name;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id
    }

}