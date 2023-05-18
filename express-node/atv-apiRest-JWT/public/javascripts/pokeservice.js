let pokeService = {
    list: async function(){
        const response = await fetch('/api/pokemon')
        return await response.json()
    },
    search: async function(id){
        const response = await fetch('/api/pokemon/' + id)
        return await response.json()
    },
    new: async function(token, name, type){
        const data = {
            method: 'POST',
            headers: {'Content-type': 'aplication/json',
                      'Authorization': 'Bearer: ' + token},
            body: JSON.stringify({name:name, type:type})
        }
        const response = await fetch('/api/pokemon', data)
        return await response.json()
    },
    update: async function(token, id, name, type){
        const data = {
            method: 'PUT',
            headers: {'Content-type': 'aplication/json',
                      'Authorization': 'Bearer: ' + token},
            body: JSON.stringify({name:name, type:type})
        }
        const response = await fetch('/api/pokemon/' + id, data)
        return await response.json()
    },
    delete: async function(token, id){
        const response = await fetch('/api/pokemon/' + id, 
            {
                method: 'DELETE',
                headers: {'Authorization': 'Bearer: ' + token},
            }
        )
        return await response.json()
    },
    login: async function(user, password){
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({user: user, password: password})
        }
        const response = await fetch('/api/pokemon/login', data)
        return await response.json()
    }
}


export default pokeService