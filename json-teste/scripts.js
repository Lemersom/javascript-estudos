const objs = [
    {
        nome: 'George',
        sobrenome: 'Harrison',
        idade: 58,
        musico: true,
        detalhes_musico: {
            banda: 'The Beatles',
            instrumentos: ['Guitarra', 'Violão']
        },
        conjuge: null
    },
    {
        nome: 'Ringo',
        sobrenome: 'Starr',
        idade: 82,
        musico: true,
        detalhes_musico: {
            banda: 'The Beatles',
            instrumentos: ['Bateria']
        },
        conjuge: 'Barbara Bach'
    }
]

//Convertendo objeto para json
const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)

//Convertendo json para objeto
const objData = JSON.parse(jsonData)
console.log(objData)
console.log(typeof objData)

objData.map((pessoa) =>{
    console.log(pessoa.nome)
})

console.log(objData[1].nome)