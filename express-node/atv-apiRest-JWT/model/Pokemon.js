let ids = 0
let pokes = []

module.exports = {
    list(){
        return pokes
    },
    new(name, type){
        let poke = {id: ++ids, name: name, type: type}
        pokes.push(poke)
        return poke
    },
    update(id, name, type){
        let i = this.getPositionById(id)
        if(i >= 0){
            pokes[i].name = name
            pokes[i].type = type
            return pokes[i]
        }
        return null
    },
    delete(id){
        let i = this.getPositionById(id)
        if(i >= 0){
            pokes.splice(i, 1)
            return true
        }
        return false
    },
    getPositionById(id){
        for(let i = 0; i < pokes.length; i++){
            if(pokes[i].id == id){
                return i
            }
        }
        return -1
    },
    getElementById(id){
        let i = this.getPositionById(id)
        if(i >= 0){
            return pokes[i]
        }
        return null
    }
}