function informarDados() {
    const valor = parseFloat(document.getElementById("valor").value);
    const tipo = document.querySelector('input[name="pagamento"]:checked').value;

    document.getElementById("erro").innerText = "";
    esconderTudo();

    if (!valor || valor <= 0) {
        document.getElementById("erro").innerText = "Informe um valor válido.";
        return;
    }

    if (tipo === "pix") {
        const total = valor * 0.9;
        document.getElementById("totalPix").innerText = total.toFixed(2);
        document.getElementById("pix").style.display = "block";
    } else {
        montarParcelas(valor);
        document.getElementById("cartao").style.display = "block";
    }
}

function esconderTudo() {
    document.getElementById("pix").style.display = "none";
    document.getElementById("cartao").style.display = "none";
    document.getElementById("sucesso").style.display = "none";
}

function montarParcelas(valor) {
    const select = document.getElementById("parcelas");
    select.innerHTML = "";

    for (let i = 1; i <= 12; i++) {
        let juros = 0;

        if (i >= 6) juros = 0.10; // 10% a partir de 6x

        const total = valor * (1 + juros);

        const option = document.createElement("option");
        option.value = total;
        option.text = `${i}x de R$ ${(total / i).toFixed(2)}`;
        select.appendChild(option);
    }

    calcularParcelas();
}

function calcularParcelas() {
    const total = document.getElementById("parcelas").value;
    document.getElementById("totalCartao").innerText =
        parseFloat(total).toFixed(2);
}

function verificarCartao() {
    const numero = document
        .getElementById("numeroCartao")
        .value.replace(/\D/g, ""); // remove espaços

    const bandeira = document.getElementById("bandeira");
    const erro = document.getElementById("erroCartao");

    erro.innerText = "";
    bandeira.style.display = "none";
    bandeira.src = "";

    if (numero.startsWith("1234")) {
        bandeira.src = "../img/visa.png";
        bandeira.style.display = "block";
    } 
    else if (numero.startsWith("4321")) {
        bandeira.src = "../img/mastercard.png";
        bandeira.style.display = "block";
    } 
    else if (numero.length >= 4) {
        erro.innerText = "Número de cartão inválido";
    }
}

function pagar() {
    esconderTudo();
    document.getElementById("sucesso").style.display = "block";
}