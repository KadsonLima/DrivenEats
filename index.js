
// FUDEU DE VEZ

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

let bebida = document.querySelectorAll(".produto.bebida");
bebida.forEach(clickado =>{
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
let sobremesa = document.querySelectorAll(".produto.sobremesa");
sobremesa.forEach(clickado =>{
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
        button.innerText = "Fechar Pedido"
    }else{
        button.innerText = "Selecione os 3 itens para fechar o pedido"
        button.classList.remove("disponivel")
    }
    
}

function whatsApp(prato, bebida, sobremesa, valor) {
    let nome = prompt("Digite seu nome :");
    let rua = prompt("Digite sua rua :");
    let link = `https://wa.me/?text=Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${valor}
    Nome: ${nome}
    Endereço: ${rua}`

    whatsApp('caju', 'suco', 'puos', valor.toFixed(2));
    window.open(link)
}

/*
            
*/
