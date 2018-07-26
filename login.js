const botao = document.querySelector("button");
const email= document.querySelector("#email");
const senha= document.querySelector("#senha");

let emailUser = "admin";
let senhaUser = "aviao123";

function logar(){
    if(email.value === emailUser && senha.value === senhaUser)
        setTimeout(abrirJanela, 1500);
        else{
            alert("Usuário e/ou senha incorretos");
        }
}

function abrirJanela(){
    window.location = "usuario.html";
}

botao.onclick = logar;