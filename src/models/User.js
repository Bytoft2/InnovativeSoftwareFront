import * as React from 'react';
import * as Coms from '../services/coms'
import Device from './Device'

export default class User extends React.Component {

    constructor(props) {
        super(props)
        console.log("Constructing...")
        this.state = {
            tags: [],
            devices: []
        }
        Coms.getDevices.then((devs) => {
            this.state.devices = devs
            for (var i = 0; i < devs.length; i++) {
                var dev = devs[i]
                if (dev.tags != null) {
                    for (var j = 0; j < dev.tags.length; j++) {
                        this.addTag(dev.tags[j])
                    }
                }
            }
        })
    }


    getTags() {
        return this.state.tags;
    }

    addTag(tag) {
        for (var i = 0; i < this.state.tags.length; i++) {
            if (this.state.tags[i] === tag) {
                return
            }
        }
        console.log("adding: " + tag)
        this.state.tags.push(tag);
    }

    removeTag(tag) {
        for (var i = 0; i < this.state.tags.length; i++) {
            if (this.state.tags[i] === tag) {
                arr.splice(i, 1);
            }
        }
    }

    getDevices() {
        return this.state.devices;
    }

    addDevices(devices) {
        this.state.devices = devices
    }

    addDevice(device) {
        return new Promise((res) => {
            for (var i = 0; i < this.state.devices.length; i++) {
                if (this.state.devices[i].name === device.name) {
                    return
                }
            }
            Coms.postDevice(device).then((id) => {
                device.powerUnitId = id
                this.state.devices.push(device)
                res()
            })
        })
    }

    removeTag(device) {
        for (var i = 0; i < this.state.devices.length; i++) {
            if (this.state.devices[i] === device) {
                arr.splice(i, 1);
            }
        }
    }

    turnOn(id) {
        var st = this.state

        return Coms.flipLight(st.userName, st.token, id, "true").then((res) => {
            if (res) {
                for (var i = 0; i < st.devices.length; i++) {
                    if (id == st.devices[i].powerUnitId) {
                        st.devices[i].on = true
                    }
                }
            }
        })
    }

    turnOff(id) {
        var st = this.state

        return Coms.flipLight(st.userName, st.token, id, "false").then((res) => {
            if (res) {
                for (var i = 0; i < st.devices.length; i++) {
                    if (id == st.devices[i].powerUnitId) {
                        st.devices[i].on = false
                    }
                }
            }
        })

    }
}