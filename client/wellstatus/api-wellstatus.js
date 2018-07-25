import queryString from 'query-string'

const create = (wellstatus) => {
    return fetch('/api/wellstatus/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wellstatus)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
  
  const list = () => {
    return fetch('/api/wellstatus/', {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).catch((err) => console.log(err))
  }

  
  const read = (params, credentials) => {
    return fetch('/api/wellstatus/' + params.id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }

  const update = (params, credentials, wellstatus) => {
    return fetch('/api/wellstatus/' + params.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body:  JSON.stringify(wellstatus)
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
    
  }
  
  const remove = (params, credentials) => {
    return fetch('/api/wellstatus/' + params.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }

  export {
    create,
    list,
    read,
    update,
    remove
  }
  