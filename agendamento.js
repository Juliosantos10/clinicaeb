const nomesProcedimentos = {
    botox: "Botox",
    capilar: "Tratamento Capilar",
    labial: "Preenchimento Labial"
};

let procedimentoAtual = "";

document.addEventListener("DOMContentLoaded", function () {
    const campoProcedimento = document.getElementById("procedimentoSelecionado");

    const params = new URLSearchParams(window.location.search);
    const procedimento = params.get("procedimento");

    if (procedimento && nomesProcedimentos[procedimento]) {
        procedimentoAtual = nomesProcedimentos[procedimento];
    } else {
        procedimentoAtual = "Procedimento não informado";
    }

    campoProcedimento.value = procedimentoAtual;

    const formulario = document.getElementById("formAgendamento");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        abrirWhatsApp();
        document.getElementById("mensagemSucesso").style.display = "block";
    });
});

function abrirWhatsApp() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!nome || !email || !telefone || !data || !hora) {
        alert("Preencha todos os campos antes de continuar.");
        return;
    }

    const mensagem = `Olá, gostaria de agendar um procedimento.

Procedimento: ${procedimentoAtual}
Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Data: ${data}
Horário: ${hora}`;

    const numeroWhatsApp = "5531984008626";

    window.open(
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
    );
}