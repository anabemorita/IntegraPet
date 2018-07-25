const botao = document.querySelector("button");
const email= document.querySelector("#email");
const senha= document.querySelector("#senha");
let emailUser = "admin";
let senhaUser = "aviao123";

function logar(){
    if(email.value === emailUser && senha.value === senhaUser)
        window.location = "usuario.html";
        else{
            alert("Usuário e/ou senha incorretos");
        }
}


botao.onclick = logar;