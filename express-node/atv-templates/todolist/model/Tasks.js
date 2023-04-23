let ids = 0;
let tasks = [];

module.exports = {
    new(name, pr) {
        let corPrioridade = this.checkPriority(pr)
        let task = {id: ++ids, name: name, prioridade: pr, cor: corPrioridade};
        tasks.push(task);
        return task;
    },
    update (id, name, pr) {
        let pos = this.getPositionById(id)
        let corPrioridade = this.checkPriority(pr)
        if (pos >= 0) {
            tasks[pos].name = name;
            tasks[pos].prioridade = pr;
            tasks[pos].cor = corPrioridade
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
    checkPriority(pr) {
        let cor = ""
        if(pr == "baixa"){
            cor = "red"
        }
        else if(pr == "media"){
            cor = "yellow"
        }
        else if(pr == "alta"){
            cor = "green"
        }
        return cor
    }
}