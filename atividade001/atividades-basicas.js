/* 1:
Escreva uma função em Javascript que retorne uma 
String contendo uma sequência de N mensagens do 
texto “Programar em Javascript é legal”. O valor 
de N é passado por parâmetro.
*/
function atv1(n){
    let str = "Programar em JavaScript é legal ";
    let retorno = "";
    for(let i = 0; i < n; i++){
        retorno += str;
    }
    return retorno;
}



/* 2:
Escreva uma função que calcule e retorne o 
fatorial de um número.
*/
function atv2(n){
    let fat = 1;
    for(let i = n; i != 0; i--){
        fat *= i;
    }
    return fat;
}


/* 3:
Escreva uma função que receba 2 valores e uma 
operação básica: adição, subtração, multiplicação 
e divisão e retorne o resultado da operação. 
Observação: Faça a validação para prevenir a 
divisão por 0 e também para garantir que a 
operação informada é válida. Retorne nulo para 
os casos de erro.
*/
function atv3(n1, n2, op){

    switch(op){
        case "add":
            return n1 + n2;
            break;
        case "sub":
            return n1 - n2;
            break;
        case "mult":
            return n1 * n2;
            break;
        case "div":
            if(n2 == 0){
                return null;
            }else{
                return n1 / n2;
            }
            break;
        default:
            return null;
    }
}

/* 4:
Escreva uma função que retorne um vetor contendo o 
resultado da tabuada de um número recebido por 
parâmetro. Cada resultado na respectiva posição 
do índice.
*/
function atv4(n){
    let vet = [];
    for(let i = 1; i <= 10; i++){
        vet.push(n * i);
    }
    return vet;
}

/* 5:
Escreva uma função que mostre na tela um número 
fornecido pelo usuário, porém invertido. 
Por exemplo, o usuário fornece o número 875 e 
a função retorna o número 578. O retorno deve ser 
um valor inteiro.
*/
function atv5(n){
    let str = String(n);
    let vet = str.split("");
    vet = vet.reverse();
    vet = vet.join("");

    return String(vet);
}

/* 6:
Escreva uma função que permita contar o número 
de vogais contidas em uma string fornecida por 
parâmetro. Por exemplo, o usuário informa a 
string “Brocolis”, e a função retorna o número 3 
(há 3 vogais nessa palavra).
*/
function atv6(str){
    let s = String(str);
    let vet = s.split("");
    let cont = 0;
    for(let i = 0; i < vet.length; i++){
        if(vet[i] == "a" || vet[i] == "e" || vet[i] == "i" || vet[i] == "o" || vet[i] == "u"){
            cont++;
        }
    }
    return cont;
}
