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
        return true
      })
      .catch((error) => {
        console.error(error);
        return false
      })
  })
}

export function getCo2() {
  return new Promise((res, rej) => {
    fetch('http://161.35.41.122:9009/api/Co2Emission', {
      method: 'GET',
      headers: {
        'Accept': 'text/plain'
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        res(responseJson)
      })
      .catch((error) => {
        console.error(error);
      })
  })
}

export function getPrice() {
  return new Promise((res, rej) => {
    fetch('http://161.35.41.122:9009/api/ElectricityPrice', {
      method: 'GET',
      headers: {
        'Accept': 'text/plain'
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        res(responseJson)
      })
      .catch((error) => {
        console.error(error);
      })
  })
}

export function flipLight(name, token, guid, state) {
  return new Promise((res, rej) => {
    fetch('http://161.35.41.122:9009/api/Light?userName=' + name + '&token=' + token + '&guid=' + guid + '&turnOn=' + state, {
      method: 'PUT',
      headers: {
        'Accept': 'text/plain'
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        res(responseJson)
      })
      .catch((error) => {
        console.error(error);
      })
  })
}

export function discoverDevices(name, token) {
  return new Promise((res, rej) => {
    fetch('http://161.35.41.122:9009/api/Light/GetAllLights?userName=' + name + '&token=' + token, {
      method: 'GET',
      headers: {
        'Accept': 'text/plain'
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        var arr = []

        for (let key in responseJson) {
          let value = responseJson[key];
          arr.push({
            deviceId: key,
            manufacturer: 0,
            name: value.name,
            on: value.state.on,
            tags: []
          })
        }

        res(arr)
      })
      .catch((error) => {
        console.error(error);
      })
  })
}