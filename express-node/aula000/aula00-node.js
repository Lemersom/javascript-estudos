const http = require("http");


const server = http.createServer(function(req, res){
    res.setHeader("Content-Type", "text/html")
    /*res.setHeader("Content-Disposition", attachment; filename=nomedoarquivo.txt)
    para fazer download*/  //Isso é HTTP

    if(req.url == "/"){
        res.end("Pagina Inicial")
    }else if(req.url == "/ola"){
        res.end("Ola Mundo")
    }else{
        res.statusCode = 404; //erro 404, ver no devtools rede
        res.end("Pagina nao encontrada")
    }
})

server.listen(3000, () =>{
    console.log("Executando")
})

//comando: node nomeDoArquivo