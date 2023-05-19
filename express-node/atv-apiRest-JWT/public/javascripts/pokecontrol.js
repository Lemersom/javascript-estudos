import pokeService from "./pokeservice.js"


function getToken(){
    return localStorage.getItem("token")
}

function isLoggedIn(){
    let token = localStorage.getItem("token")
    console.log(`isloggedIn: ${token}`)
    return token ? true : false
}


let updatePokeList = async function(){
    let response = await pokeService.list()
    if(response.status){
        let ul = document.querySelector("#poke-list")
        ul.innerHTML = ""
        response.list.forEach((item) => {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(`${item.name} [${item.type}]`))

            if(isLoggedIn()){
                let editBtn = document.createElement("button")
                editBtn.className = "btn btn-link"
                editBtn.innerHTML = "edit"
                editBtn.addEventListener("click", () => {
                    document.querySelector("#id").value = item.id
                    document.querySelector("#name").value = item.name
                    document.querySelector("#type").value = item.type
                })
                

                let delBtn = document.createElement("button")
                delBtn.innerHTML = "remove"
                delBtn.className = "btn btn-danger"
                delBtn.addEventListener("click", async () => {
                    if(confirm("Do you want to remove the Pokémon?")){
                        let response = await pokeService.delete(getToken(), item.id)
                        if(response.status){
                            ul.removeChild(li)
                        }
                    }
                })
                li.appendChild(editBtn)
                li.appendChild(delBtn)
            }
            ul.appendChild(li)
        })
    }
}

function updateForms(){
    if(isLoggedIn()){
        document.querySelector("form#poke-form").className = ''
        document.querySelector("form#login-form").className = 'd-none'
    }
    else{
        document.querySelector("form#poke-form").className = 'd-none'
        document.querySelector("form#login-form").className = ''
    }
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#type').value = ''
    document.querySelector('#username-form').value = ''
    document.querySelector('#password-form').value = ''
    document.querySelector('#error-msg').value = ''
}

window.addEventListener("load", () => {
    updatePokeList()

    document.querySelector("form#poke-form").addEventListener("submit", async (evt) => {
        evt.preventDefault()
        let hid = document.querySelector("#id")
        let hname = document.querySelector("#name")
        let htype = document.querySelector("#type")
        let response;
        if(hid.value){
            response = await pokeService.update(getToken(), hid.value, hname.value, htype.value)
        }
        else{
            response = await pokeService.new(getToken(), hname.value, htype.value)
        }
        if(response.status){
            updatePokeList()
            hid.value = ''
            hname.value = ''
            htype.value = ''
        }
        else{
            logout()
        }
    })

    function logout(){
        localStorage.removeItem("token")
        updatePokeList()
        updateForms()
    }

    document.querySelector("form#login-form").addEventListener("submit", async (evt) => {
        evt.preventDefault()
        let username = document.querySelector("#username-form").value
        let password = document.querySelector("#password-form").value
        if(username && password){
            let response = await pokeService.login(username, password)
            if(response.status){
                localStorage.setItem("token", response.token)
                updatePokeList()
                updateForms()
            }
            else{
                document.querySelector("#error-msg").innerHTML = response.msg
            }
        }
    })

    document.querySelector("#logout").addEventListener("click", () => {
        logout()
    })

    updateForms()
})