let ids = 0
let pokes = []

module.exports = {
    listar(){
        return {status:true, data:pokes}
    },
    buscar(id){
        let validacao = this.validarId(id)
        if(validacao == true){
            return {status:true, data:pokes[id-1]}
        }
        else{
            return validacao
        }
    },
    inserir(name, type){
        if(name && type != undefined){
            let poke = {id:++ids, name:name, type:type}
            pokes.push(poke)
            return {status:true, data:poke}
        }
        else{
            return {status:false, data:null, message:"Dados incompletos", error:500}
        }
    },
    alterar(id, name, type){
        let validacao = this.validarId(id)
        if(validacao != true){
            return validacao
        }
        else{
            let i = this.getPositionById(id)
            if(name && type != undefined){
                pokes[i].name = name
                pokes[i].type = type
                return {status:true, msg:"Alterado com sucesso"}
            }
            else{
                return {status:false, data:null, message:"Dados incompletos", error:500}
            }
        }
    },
    excluir(id){
        let validacao = this.validarId(id)
        console.log(validacao)
        if(validacao != true){
            return validacao
        }
        else{
            let i = this.getPositionById(id)
            pokes.splice(i, 1)
            return {status:true, message:"Removido com sucesso"}
        }
    },
    getPositionById(id) {
        for (let i = 0; i<pokes.length; i++) {
            if (pokes[i].id == id) {
                return i;
            }
        }
        return -1;
    },
    validarId(id){
        if(id != id || id < 1){
            return {status:false, data:null, message:"Id Invalido", error:500}
        }

        for(let i = 0; i < pokes.length; i++){
            if(pokes[i].id == id){
                return true
            }
        }

        return {status:false, data:null, message:"Pokémon não encontrado", error:404}
    }
}