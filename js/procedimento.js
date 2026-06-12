const telefoneWhatsApp = "5531984008626";

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

    procedimentoAtual = chave;

    document.getElementById("tituloProcedimento").innerText = conteudo.titulo;
    document.getElementById("descricaoProcedimento").innerText = conteudo.descricao;
    document.getElementById("imagemProcedimento").src = conteudo.imagem;

    const mensagem = `Olá! Gostaria de agendar uma avaliação para o procedimento: ${conteudo.titulo}.`;

    document.getElementById("btnAgendar").href =
        `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    document.getElementById("btnAgendar").target = "_blank";

    document.querySelector(".procedimentos").style.display = "none";
    document.getElementById("conteudoProcedimento").style.display = "block";

    window.scrollTo({
        top: document.getElementById("conteudoProcedimento").offsetTop,
        behavior: "smooth"
    });
}

function voltarLista() {
    document.getElementById("conteudoProcedimento").style.display = "none";
    document.querySelector(".procedimentos").style.display = "grid";

    procedimentoAtual = "";

    window.scrollTo({
        top: document.querySelector(".procedimentos").offsetTop,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const procedimento = params.get("procedimento");

    if (procedimento && procedimentos[procedimento]) {
        mostrarProcedimento(procedimento);
    }
});