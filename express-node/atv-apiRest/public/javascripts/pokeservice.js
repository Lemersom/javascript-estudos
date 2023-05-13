let pokeservice = {
    listar: async function() {
        const response = await fetch('/api/pokemon')
        return await response.json()
    },
    buscar: async function(id) {
        const response = await fetch('/api/pokemon/' + id)
        return await response.json()
    },
    inserir: async function(name, type) {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name:name, type:type})
        }
        const response = await fetch('/api/pokemon', data)
        return await response.json()
    },
    alterar: async function(id, name, type) {
        const data = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name:name, type:type})
        }
        const response = await fetch('/api/pokemon/'+id, data)
        return await response.json()
    },
    excluir: async function(id) {
        const response = await fetch('/api/pokemon/'+id, {method: 'DELETE'})
        return await response.json()
    }
}

export default pokeservice