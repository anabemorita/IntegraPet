const userImg = document.querySelector("#userImg");
const petImg = document.querySelector("#petImg");
const dono = document.querySelector(".dono");
const pet = document.querySelector(".pet");
const divDados = document.querySelector(".dados");
const divServicos = document.querySelector(".servicos");


userImg.addEventListener('click', mostrarUsuario);
petImg.addEventListener('click', mostrarPet);

function mostrarUsuario(){
    if(!userImg.classList.contains("clique")){
        userImg.classList.add("clique");
        divDados.classList.add("active");
        dono.classList.add("active");
        pet.classList.remove("clique");
        divServicos.classList.add("acompanhar");
        petImg.classList.remove("clique");
    }    
    else{
        userImg.classList.remove("clique");
        divDados.classList.remove("active");
        dono.classList.remove("active");
        divServicos.classList.remove("acompanhar");
    }
}

function mostrarPet(){
    if(!petImg.classList.contains("clique")){
        petImg.classList.add("clique");
        divDados.classList.add("active");
        pet.classList.add("active");
        dono.classList.remove("active");
        divServicos.classList.add("acompanhar");
        userImg.classList.remove("clique");
    }
    else{
        petImg.classList.remove("clique");
        divDados.classList.remove("active");
        pet.classList.add("active");
        divServicos.classList.remove("acompanhar");
    }
}
