const userImg = document.querySelector("#userImg");
const petImg = document.querySelector("#petImg");
const dono = document.querySelector(".dono");
const pet = document.querySelector(".pet");
const divDados = document.querySelector(".dados");
const divServicos = document.querySelector(".servicos");
const divData = document.querySelector(".dataDiv");
const servicos = document.querySelectorAll(".item");
const botaoMarcar = document.querySelector("button");


function mostrarUsuario(){
    if(!userImg.classList.contains("clique")){
        userImg.classList.add("clique");
        divDados.classList.add("active");
        dono.classList.add("active");
        pet.classList.remove("active");
        dono.classList.remove("esconde");
        pet.classList.add("esconde");
        divServicos.classList.add("acompanhar");
        petImg.classList.remove("clique");
    }    
    else{
        userImg.classList.remove("clique");
        divDados.classList.remove("active");
        dono.classList.remove("active");
        divServicos.classList.remove("acompanhar");        
        dono.classList.remove("esconde");
    }
}

function mostrarPet(){
    if(!petImg.classList.contains("clique")){
        petImg.classList.add("clique");
        divDados.classList.add("active");
        pet.classList.add("active");
        dono.classList.remove("active");
        dono.classList.add("esconde");
        pet.classList.remove("esconde");
        divServicos.classList.add("acompanhar");
        userImg.classList.remove("clique");
        if(divData.classList.contains("dataActive")){
            divData.classList.add("descer");
        }else{
            divData.classList.remove("descer");
        }
    }
    else{
        petImg.classList.remove("clique");
        divDados.classList.remove("active");
        pet.classList.add("active");
        pet.classList.remove("esconde");
        divServicos.classList.remove("acompanhar");
    }
}

function mostrarMarcarData(){
    if(!this.classList.contains("cliqueServico")){
        for(item of servicos){
            if(item.classList.contains("cliqueServico") && item !== this){
                item.classList.remove("cliqueServico");
            }
        }
        this.classList.add("cliqueServico");
        divData.classList.add("active");
        divData.classList.add("dataActive");
    }
    else{
        this.classList.remove("cliqueServico");
        divData.classList.remove("active");
        divData.classList.remove("dataActive");
    }
}

userImg.addEventListener('click', mostrarUsuario);
petImg.addEventListener('click', mostrarPet);
for(item of servicos){
    item.addEventListener('click', mostrarMarcarData);
}