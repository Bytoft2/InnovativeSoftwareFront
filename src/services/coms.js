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

export function putDevice(dev) {
  return new Promise(() => {
    fetch('http://161.35.41.122:9009/api/PowerUnit/' + dev.powerUnitId, {
      method: 'PUT',
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dev)
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return true
      })
      .catch((error) => {
        console.error(error);
        return false
      })
  })

}