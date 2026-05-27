const procedimentos = {
    botox: {
        titulo: "Botox",
        descricao: "O Botox suaviza rugas e linhas de expressão, proporcionando aparência mais jovem e natural. Rápido, seguro e realizado por profissionais qualificados.",
        imagem: "../img/botox.png"
    },

    capilar: {
        titulo: "Tratamento Capilar",
        descricao: "Fortalece os fios, combate a queda de cabelo e promove saúde capilar e bem-estar.",
        imagem: "../img/capilar1.png"
    },

    labial: {
        titulo: "Preenchimento Labial",
        descricao: "Realça os lábios, melhora o contorno e promove rejuvenescimento com resultados naturais.",
        imagem: "../img/labial1.png"
    }
};

let procedimentoAtual = "";

function mostrarProcedimento(tipo) {
    const chave = tipo.toLowerCase();
    const conteudo = procedimentos[chave];

    if (!conteudo) {
        alert("Procedimento não encontrado.");
        return;
    }

    procedimentoAtual = conteudo.titulo;

    document.getElementById("tituloProcedimento").innerText = conteudo.titulo;
    document.getElementById("descricaoProcedimento").innerText = conteudo.descricao;
    document.getElementById("imagemProcedimento").src = conteudo.imagem;
    document.getElementById("procedimentoSelecionado").value = conteudo.titulo;

    document.querySelector(".procedimentos").style.display = "none";
    document.getElementById("conteudoProcedimento").style.display = "block";

    setTimeout(() => {
        window.scrollTo({
            top: document.getElementById("conteudoProcedimento").offsetTop,
            behavior: "smooth"
        });
    }, 100);
}

function voltarLista() {
    document.getElementById("conteudoProcedimento").style.display = "none";
    document.querySelector(".procedimentos").style.display = "grid";

    document.getElementById("mensagemSucesso").style.display = "none";
    document.getElementById("formAgendamento").reset();

    procedimentoAtual = "";

    window.history.pushState({}, "", "procedimento.html");

    window.scrollTo({
        top: document.querySelector(".procedimentos").offsetTop,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const procedimento = params.get("procedimento");

    if (procedimento) {
        setTimeout(() => {
            mostrarProcedimento(procedimento);
        }, 100);
    }

    const formulario = document.getElementById("formAgendamento");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            abrirWhatsApp();
            document.getElementById("mensagemSucesso").style.display = "block";
        });
    }
});

function abrirWhatsApp() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!procedimentoAtual) {
        alert("Selecione um procedimento primeiro.");
        return;
    }

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