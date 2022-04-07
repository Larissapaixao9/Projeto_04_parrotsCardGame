let resposta=prompt("Digite um numero par, entre 4 e 14 para escolher o numero de cartas");
if(resposta==12){
    let a=document.querySelector(".bloco.carta1");
    a.classList.add("escondido");
    let b=document.querySelector(".bloco.carta2");
    b.classList.add("escondido");

}

if(resposta==10){
    let a=document.querySelector(".bloco.carta1");
    a.classList.add("escondido");
    let b=document.querySelector(".bloco.carta2");
    b.classList.add("escondido");
    let c=document.querySelector(".bloco.carta3");
    c.classList.add("escondido");
    let d=document.querySelector(".bloco.carta4");
    d.classList.add("escondido");

}

if(resposta==8){
    let a=document.querySelector(".bloco.carta1");
    a.classList.add("escondido");
    let b=document.querySelector(".bloco.carta2");
    b.classList.add("escondido");
    let c=document.querySelector(".bloco.carta3");
    c.classList.add("escondido");
    let d=document.querySelector(".bloco.carta4");
    d.classList.add("escondido");
    let e=document.querySelector(".bloco.carta5");
    e.classList.add("escondido");
    let f=document.querySelector(".bloco.carta6");
    f.classList.add("escondido");
}

if(resposta==6){
    let a=document.querySelector(".bloco.carta1");
    a.classList.add("escondido");
    let b=document.querySelector(".bloco.carta2");
    b.classList.add("escondido");
    let c=document.querySelector(".bloco.carta3");
    c.classList.add("escondido");
    let d=document.querySelector(".bloco.carta4");
    d.classList.add("escondido");
    let e=document.querySelector(".bloco.carta5");
    e.classList.add("escondido");
    let f=document.querySelector(".bloco.carta6");
    f.classList.add("escondido");
    let g=document.querySelector(".bloco.carta7");
    g.classList.add("escondido");
    let h=document.querySelector(".bloco.carta8");
    h.classList.add("escondido");
}

if(resposta==4){
let a=document.querySelector(".bloco.carta1");
a.classList.add("escondido");
let b=document.querySelector(".bloco.carta2");
b.classList.add("escondido");
let c=document.querySelector(".bloco.carta3");
c.classList.add("escondido");
let d=document.querySelector(".bloco.carta4");
d.classList.add("escondido");
let e=document.querySelector(".bloco.carta5");
e.classList.add("escondido");
let f=document.querySelector(".bloco.carta6");
f.classList.add("escondido");
let g=document.querySelector(".bloco.carta7");
g.classList.add("escondido");
let h=document.querySelector(".bloco.carta8");
h.classList.add("escondido");
let i=document.querySelector(".bloco.carta9");
i.classList.add("escondido");
let j=document.querySelector(".bloco.carta10");
j.classList.add("escondido");
}

function Clicou(elemento){
        let resposta_a=prompt("digite um numero par");
        if(resposta_a%2==0 && resposta_a>=4 && resposta_a<=14){
            elemento.classList.add("rosa");
        }
}

function virar(){
    console.log("quem tocou em mim?");
    console.log(this);
    this.classList.toggle("flip");
}

let cartas=document.querySelectorAll(".bloco");
//abaixo, vou colocar a função forEach 
//ela serve p/ executar uma operação para
//cada elemento de uma array
// como "cartas recebeu todos os blocos, ela é um array agora"

cartas.forEach(bloco => bloco.addEventListener("click",virar)); 