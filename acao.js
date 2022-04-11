let Selecionou=0;
let primeira_selecao;
let segunda_selecao;
let tentativas=0;
let SoDoisClicks=0;
let resposta;

const carregando=document.querySelector(".carregando");
const conteudo=document.querySelector(".conteudo");

function iniciar_2(){
    setTimeout(()=>{
        carregando.style.opacity=0;
       carregando.style.display="none" ;

       conteudo.style.display="block";
       setTimeout(()=>
        (conteudo.style.opacity=1),50);
       
       conteudo.style.opacity=1
    },4000)
}

iniciar_2()

function iniciar(){
do{
resposta=prompt("Digite um numero par, entre 4 e 14 para escolher o numero de cartas");}
while(resposta<4 || resposta>14 || resposta%2!=0)


    if(resposta==12){
        let a=document.querySelector(".bloco.carta1");
        a.classList.add("escondido");
        let b=document.querySelector(".bloco.carta2");
        b.classList.add("escondido");
        cartas_array2=['bloco carta1'];
        console.log(cartas_array2);
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
   
}




    
function virar(){
    this.classList.add("flip");

    
    if(Selecionou==0){
        
        Selecionou=1;
        primeira_selecao=this;
        tentativas+=1;
    }
    else{
        
        tentativas+=1;
        Selecionou=0;
        segunda_selecao=this;
        if(primeira_selecao.dataset.jogo==segunda_selecao.dataset.jogo){
            primeira_selecao.removeEventListener("click",virar);
            segunda_selecao.removeEventListener("click",virar);
            
        }
        else{
            
           setTimeout(()=>{
                   segunda_selecao.classList.remove("flip");
                   primeira_selecao.classList.remove("flip")},1000)
                    
            }
       }
        let total=document.getElementsByClassName("flip").length;
        if(total==resposta){
            alert("O JOGO ACABOU");
            alert("Você ganhou em "+tentativas+" jogadas!");
            let resposta2=prompt("Você quer jogar novamente?");
            if(resposta2=="sim"){
                window.location.reload(true);
            }
           
          
        }
    }




let cartas=document.querySelectorAll(".bloco");
//a funcao embaralhar está em parenteses porque assim 
//ela se torna uma função iniciada imediatamente
(function embaralhar_cartas(){
        cartas.forEach(bloco=>{
            let numeros=Math.floor(Math.random() * 14);
            bloco.style.order=numeros})
        
})();
//abaixo, vou colocar a função forEach 
//ela serve p/ executar uma operação para
//cada elemento de uma array
// como "cartas recebeu todos os blocos, ela é um array agora"

cartas.forEach(bloco => {bloco.addEventListener("click",virar)}); 

window.addEventListener("load",iniciar)




