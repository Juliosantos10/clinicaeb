const telefoneWhatsApp = "5531984008626";

const procedimentos = {
    botox: {
        titulo: "Botox",
        descricao: "O Botox suaviza rugas e linhas de expressão, proporcionando aparência mais jovem e natural. Rápido, seguro e realizado por profissionais qualificados.",
        imagem: "img/botox.png"
    },

    capilar: {
        titulo: "Tratamento Capilar",
        descricao: "Fortalece os fios, combate a queda de cabelo e promove saúde capilar e bem-estar.",
        imagem: "img/capilar1.png"
    },

    labial: {
        titulo: "Preenchimento Labial",
        descricao: "Realça os lábios, melhora o contorno e promove rejuvenescimento com resultados naturais.",
        imagem: "img/labial1.png"
    },

    limpeza: {
        titulo: "Limpeza de Pele",
        descricao: "Procedimento indicado para remover impurezas, controlar a oleosidade e promover renovação celular, deixando a pele mais saudável, limpa e iluminada.",
        imagem: "img/limpeza-pele.png"
    },

    microagulhamento: {
        titulo: "Microagulhamento",
        descricao: "Técnica que estimula a produção de colágeno e auxilia na melhora da textura da pele, linhas finas e marcas.",
        imagem: "img/microagulhamento.png"
    },

    peeling: {
        titulo: "Peeling Químico",
        descricao: "Procedimento que promove renovação celular, melhora da textura da pele e auxilia no tratamento de manchas e sinais do envelhecimento.",
        imagem: "img/peeling-quimico.png"
    },

    bioestimuladores: {
        titulo: "Bioestimuladores de Colágeno",
        descricao: "Tratamento que estimula a produção natural de colágeno, promovendo firmeza, sustentação e rejuvenescimento facial.",
        imagem: "img/bioestimuladores.png"
    },

   pdrn: {
    titulo: "PDRN",
    descricao: "Tratamento regenerativo que utiliza polinucleotídeos para estimular a renovação celular, melhorar a qualidade da pele, promover hidratação profunda e auxiliar no rejuvenescimento facial.",
    imagem: "img/pdrn.png"
},

    skinbooster: {
        titulo: "Skinbooster",
        descricao: "Procedimento voltado para hidratação profunda da pele, melhorando elasticidade, brilho e qualidade da pele.",
        imagem: "img/skinbooster.png"
    },

    enzimas: {
        titulo: "Aplicação de Enzimas",
        descricao: "Procedimento utilizado como auxílio em protocolos personalizados para gordura localizada e definição corporal.",
        imagem: "img/enzimas.png"
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