let as = document.querySelectorAll(".products> label");
let button = document.querySelector(".button");

function getpedido() {
    let pratos = document.querySelectorAll(":checked")
    let total = document.querySelector(".total")
    let itens = document.querySelectorAll(".item");
    let valor = 0;

    for (let i = 0; i < 3; i++) {
        let prato = pratos[i].parentElement.querySelectorAll("span");

        itens[i].childNodes[1].innerText = prato[0].innerHTML.replace('R$ ', '');
        itens[i].childNodes[3].innerText = prato[1].innerText.replace('R$ ', '');
        valor = valor + parseFloat((prato[1].innerText).replace('R$ ', ''));
        total.childNodes[1].innerText = "R$ " + valor.toFixed(2);
    }
 

}

// FUDEU DE VEZ


as.forEach(function (e) {
    e.addEventListener("click", () => {
        let selecionados = document.querySelectorAll(".products > label > :checked");
        console.log("teste")
        if (selecionados.length == 3) {

            document.querySelector(".button")
                .addEventListener("click", () => {
                    document.querySelector(".closed-demand").style.visibility = "visible"
                    getpedido();
                })
            document.querySelector(".cancel")
                .addEventListener("click", () => {
                    document.querySelector(".closed-demand").style.visibility = "hidden"
                })

            button.style.backgroundColor = "green";
            button.innerText = "Fechar Pedido"
            button.style.cursor = "pointer"
        } else {
            button.style.backgroundColor = "#CBCBCB";
            button.innerText = "Selecione os 3 itens para fechar o pedido char Pedido"
            button.style.cursor = "initial"
        }

    });
});

document.querySelector(".pedir").addEventListener("click",(e)=>{

    whatsApp('caju', 'suco', 'puos', valor.toFixed(2));
})

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


    window.open(link)
}