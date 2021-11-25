import User from '../models/User'

export function postDevice(dev) {
  return new Promise((res, rej) => {
    fetch('http://161.35.41.122:9009/api/PowerUnit', {
      method: 'POST',
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dev)
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        res(responseJson)
      })
      .catch((error) => {
        console.error(error);
      })

  })
}

export const getDevices = new Promise((res, rej) => {
  fetch('http://161.35.41.122:9009/api/PowerUnit', {
    method: 'GET',
    headers: {
      'Accept': 'text/plain'
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      res(responseJson)
    })
    .catch((error) => {
      console.error(error);
    })
})

export function getDevice(id) {
  fetch('http://161.35.41.122:9009/api/PowerUnit/${id}', {
    method: 'GET',
    headers: {
      'Accept': 'text/plain'
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      return responseJson
    })
    .catch((error) => {
      console.error(error);
    })

}

export function putDevice(id) {
  fetch('http://161.35.41.122:9009/api/PowerUnit/${id}', {
    method: 'PUT',
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "deviceId": 0,
      "manufacturer": 0,
      "name": "RNTest",
      "on": true,
      "tags": [
        "LivingRoom"
      ]
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    })

}