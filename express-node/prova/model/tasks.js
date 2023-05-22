let ids = 0;
let tasks = [];

let finalizadas = [];

module.exports = {
    new(name, situation) {
        let task = {id: ++ids, name: name, situation: situation};
        tasks.push(task);
        return task;
    },
    update (id) {
        let pos = this.getPositionById(id)
        if (pos >= 0) {
            tasks[pos].situation = 'andamento';
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
        finalizadas.push(tasks[i])
        if (i >= 0) {
            tasks.splice(i, 1);
            return true;
        }
        return false; 
    },
    tasksAguardando(){
        let aguardando = []
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].situation == 'aguardando'){
                aguardando.push(tasks[i])
            }
        }
        return aguardando
    },
    tasksAndamento(){
        let andamento = []
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].situation == 'andamento'){
                andamento.push(tasks[i])
            }
        }
        return andamento
    },
    tasksFinalizadas(){
        return finalizadas
    }
}