import pokeservice from "./pokeservice.js"

let updateList = async function() {
    let resp = await pokeservice.listar();
    if(resp.status){
        let ul = document.querySelector("#pokes");
        ul.innerHTML = "";
        resp.data.forEach((item) => {
            let li = document.createElement("li")
                        
            let edit = document.createElement("button")
            edit.addEventListener("click", function() {
                document.querySelector("#tid").value = item.id
                document.querySelector("#tname").value = item.name
                document.querySelector("#ttype").value = item.type
            })
            edit.className = "btn btn-link"
            edit.innerHTML = "edit"
                        
            let del = document.createElement("button")
            del.innerHTML = "done"
            del.className = "btn btn-link"
            del.addEventListener("click", async function() {
                if (confirm("Deseja excluir o pokemon?")) {
                    let resp = await pokeservice.excluir(item.id)
                    if (resp.status) {
                        ul.removeChild(li);
                    }
                }
            })

            li.appendChild(document.createTextNode(item.name + " "))
            li.appendChild(edit)
            li.appendChild(del)
            ul.appendChild(li)
        })
    }
};

window.addEventListener("load", function() {
    updateList()

    document.querySelector("form").addEventListener("submit", async function(evt) {
        evt.preventDefault();
        let hid = document.querySelector("#id")
        let hname = document.querySelector("#name")
        let htype = document.querySelector("#type")
        let resp;
        if (hid.value) {
            resp = await pokeservice.alterar(hid.value, hname.value, htype.value);
        } else {
            resp = await pokeservice.inserir(hid.value);
            resp = await pokeservice.inserir(hname.value);
            resp = await pokeservice.inserir(htype.value);
        }
        if (resp.status) {
            updateList()
            hid.value = '';
            hname.value = '';
            htype.value = '';
        }
    })
});