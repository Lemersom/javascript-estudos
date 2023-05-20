let ids = 0;
let tasks = [];

module.exports = {
    new(name, situation) {
        let task = {id: ++ids, name: name, situation: situation};
        tasks.push(task);
        return task;
    },
    update (id, name, situation) {
        let pos = this.getPositionById(id)
        if (pos >= 0) {
            tasks[pos].name = name;
            tasks[pos].situation = situation;
        }
    },
    list() {
        return tasks;
    },
    getElementById(id) {
        let pos = this.getPositionById(id)
        if (pos >= 0) {
            return tasks[pos];
        }
        return null;
    },
    getPositionById(id) {
        for (let i = 0; i<tasks.length; i++) {
            if (tasks[i].id == id) {
                return i;
            }
        }
        return -1;
    },
    delete(id) {
        let i = this.getPositionById(id);
        if (i >= 0) {
            tasks.splice(i, 1);
            return true;
        }
        return false; 
    },
    situationAguardando(id){
        let pos = this.getElementById(id)
        if(pos.situacao == "aguardando"){
            return true
        }
        else{
            return false
        }
    },
    situationEspera(id){
        let pos = this.getElementById(id)
        if(pos.situacao == "espera"){
            return true
        }
        else{
            return false
        }
    }
}