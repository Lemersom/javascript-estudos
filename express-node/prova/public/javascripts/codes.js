//mudar cor
let mudar_cor = document.getElementById("mudar-cor")
if(mudar_cor){
    mudar_cor.addEventListener("click", mudarCor)
}

function mudarCor(){
    let prioridade = document.getElementById("andamento-prioridade")
    if(prioridade){
        if(prioridade.classList[0] == "alto"){
            prioridade.classList.remove("alto")
            prioridade.classList.add("medio")
            return
        }
        else if(prioridade.classList[0]  == "medio"){
            prioridade.classList.remove("medio")
            prioridade.classList.add("baixo")
            return
        }
        else if(prioridade.classList[0]  == "baixo"){
            prioridade.classList.remove("baixo")
            prioridade.classList.add("alto")
            return
        }
    }
    else{
        return
    }
}