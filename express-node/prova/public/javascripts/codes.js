//mudar cor

//Função para atualizar as cores
function atualizarCores() {
    let itensAndamento = document.querySelectorAll('.ul-andamento li');
  
    itensAndamento.forEach(function(item) {
      let itemId = item.getAttribute('data-id');
      let corArmazenada = localStorage.getItem(itemId);
  
      if (corArmazenada) {
        item.classList.remove('alto', 'medio', 'baixo');
        item.classList.add(corArmazenada);
      }
    });
}
  

//Evento de clique para alterar a cor
let ulAndamento = document.querySelector('.ul-andamento');
  
ulAndamento.addEventListener('click', function(event) {
    let mudarCor = event.target.closest('#mudar-cor');
    
    if (mudarCor) {
      let item = mudarCor.parentElement;
      let corAtual = item.classList[0];
      let novaCor;
  
      if (corAtual == "alto") {
        novaCor = "medio";
      } else if (corAtual == "medio") {
        novaCor = "baixo";
      } else if (corAtual == "baixo") {
        novaCor = "alto";
      }
  
      item.classList.remove(corAtual);
      item.classList.add(novaCor);
  
      let itemId = item.getAttribute('data-id');
      localStorage.setItem(itemId, novaCor);
    }
});



document.addEventListener('DOMContentLoaded', function() {
    atualizarCores();
});
