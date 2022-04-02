
// VARIAVEIS GLOBAIS
let prato , valprato;
let bebida, valbebida;
let sobremesa,valsobremesa;
let valor;
// FUNÇOES DE MARCAR OS PRODUTOS
let pratos = document.querySelectorAll(".produto.pratos");
pratos.forEach(clickado =>{
    clickado.addEventListener("click", ()=>{
        let marcado = document.querySelector(".pratos.marcado");
        if (marcado !== null && marcado !== clickado) {
            marcado.classList.toggle("marcado");
            clickado.classList.toggle("marcado")
        }else{
            clickado.classList.toggle("marcado")
        }
        //
        verificar();
    })
});
let bebidas = document.querySelectorAll(".produto.bebida");
bebidas.forEach(clickado =>{
    clickado.addEventListener("click", ()=>{
        let marcado = document.querySelector(".bebida.marcado");
        if (marcado !== null && marcado !== clickado) {
            marcado.classList.toggle("marcado");
            clickado.classList.toggle("marcado")
        }else{
            clickado.classList.toggle("marcado")
        }
        //
        verificar();
    })
});
let sobremesas = document.querySelectorAll(".produto.sobremesa");
sobremesas.forEach(clickado =>{
    clickado.addEventListener("click", ()=>{
        let marcado = document.querySelector(".sobremesa.marcado");
        if (marcado !== null && marcado !== clickado) {
            marcado.classList.toggle("marcado");
            clickado.classList.toggle("marcado")
        }else{
            clickado.classList.toggle("marcado")
        }
        //
        verificar();

    })
});

function verificar(){
    let produtos = document.querySelectorAll(".marcado")
    let button = document.querySelector(".button")
    if(produtos.length == 3){
        button.classList.add("disponivel")
        button.innerText = "Fechar Pedido";
        button.classList.remove("desligado")

        
    }else{
        button.innerText = "Selecione os 3 itens para fechar o pedido"
        button.classList.remove("disponivel")
        button.classList.add("desligado")
    }
    
}

function conta(){
    document.querySelector(".closed-demand").classList.remove("hidden");
    prato = document.querySelector(".produto.pratos.marcado").innerText.split('\n\n')
    bebida = document.querySelector(".produto.bebida.marcado").innerText.split('\n\n')
    sobremesa = document.querySelector(".produto.sobremesa.marcado").innerText.split('\n\n')
    
    changHtml()
   
    valor = (parseFloat(valprato.replace(",", '.'))+parseFloat(valbebida.replace(",", '.'))+parseFloat(valsobremesa.replace(",", '.'))).toFixed(2);
    document.querySelector(".total").innerHTML = `TOTAL\n                <p>R$ ${valor.replace(".", ',')}</p>\n            `
}
function fechar(){
    document.querySelector(".closed-demand").classList.add("hidden");
}

function whatsApp() {
    
    let nome = prompt("Digite seu nome :");
    let rua = prompt("Digite sua rua :");
    let link = `https://wa.me/?text=Olá, gostaria de fazer o pedido:%0A
    - Prato: ${prato[0]}%0A
    - Bebida: ${bebida[0]}%0A
    - Sobremesa: ${sobremesa[0]}%0A
    Total: R$ ${valor}%0A
    Nome: ${nome}%0A
    Endereço: ${rua}`

    window.open(link)
}
function changHtml(){
    let itens = document.querySelectorAll(".item");
    valprato = prato[2].replace("R$ ", '')
    valbebida = bebida[2].replace("R$ ", '')
    valsobremesa = sobremesa[2].replace("R$ ", '')
    itens[0].innerHTML = `\n                <p>${prato[0]}</p>\n                <p>${valprato}</p>\n            `
    itens[1].innerHTML = `\n                <p>${bebida[0]}</p>\n                <p>${valbebida}</p>\n            `
    itens[2].innerHTML = `\n                <p>${sobremesa[0]}</p>\n                <p>${valsobremesa}</p>\n            `
    
}
/*
            
*/
