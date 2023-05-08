let pokes = [
    {id:1, name:'Bulbasaur', type:'Grass'},
    {id:2, name:'Ivysaur', type:'Grass-Poison'},
    {id:3, name:'Venusaur', type:'Grass-Poison'}
]

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
    inserir(obj){
        if(obj.id && obj.name && obj.type != undefined){
            pokes.push(obj)
            return {status:true, data:obj}
        }
        else{
            return {status:false, data:null, message:"Dados incompletos", error:500}
        }
    },
    alterar(id, obj){
        let validacao = this.validarId(id)
        if(validacao != true){
            return validacao
        }
        else{
            if(obj.id && obj.name && obj.type != undefined){
                pokes[id-1] = obj
                return {status:true, data:obj}
            }
            else{
                return {status:false, data:null, message:"Dados incompletos", error:500}
            }
        }
    },
    excluir(id){
        let validacao = this.validarId(id)
        if(validacao != true){
            return validacao
        }
        else{
            let obj = pokes[id-1]
            delete pokes[id-1]
            return {status:true, data:obj, message:"Removido com sucesso"}
        }
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