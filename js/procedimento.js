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

/* =======================
   MODAL DE IMAGEM
======================= */

const modalImagem = document.getElementById("modalImagem");
const imagemExpandida = document.getElementById("imagemExpandida");

function abrirImagem(src) {

    imagemExpandida.src = src;

    modalImagem.style.display = "flex";
}

document.querySelector(".fechar-modal").addEventListener("click", () => {

    modalImagem.style.display = "none";
});

modalImagem.addEventListener("click", (e) => {

    if (e.target === modalImagem) {

        modalImagem.style.display = "none";
    }
});

const blogs = {

    bioestimuladores: {
        titulo: "Bioestimuladores de Colágeno: Firmeza e Rejuvenescimento Natural",
        texto: `Com o passar dos anos, nosso organismo reduz naturalmente a produção de colágeno, proteína responsável pela firmeza, sustentação e elasticidade da pele. Como consequência, podem surgir sinais de flacidez, perda de contorno facial e diminuição da qualidade da pele.

Os bioestimuladores de colágeno são procedimentos estéticos que estimulam o organismo a produzir colágeno de forma gradual e natural. Diferente de alguns tratamentos que oferecem resultados imediatos, os bioestimuladores promovem uma melhora progressiva da pele ao longo dos meses.

Entre os principais benefícios estão a melhora da firmeza, redução da flacidez, aumento da sustentação facial e corporal e melhora da textura da pele. Os resultados costumam ser naturais, preservando as características individuais de cada pessoa.

O tratamento é personalizado e indicado após avaliação profissional, considerando as necessidades e objetivos de cada paciente.

Se você busca um rejuvenescimento natural e duradouro, os bioestimuladores de colágeno podem ser uma excelente opção para cuidar da sua beleza e autoestima.`
    },

    pdrn: {
        titulo: "PDRN: Tecnologia Regenerativa para uma Pele Mais Saudável",
        texto: `O PDRN (Polidesoxirribonucleotídeo) é uma das inovações mais promissoras da estética regenerativa. Seu principal objetivo é estimular os processos naturais de reparação e renovação celular, contribuindo para uma pele mais saudável, hidratada e rejuvenescida.

O tratamento auxilia na melhora da qualidade da pele, promovendo hidratação profunda, aumento da luminosidade, melhora da textura e redução dos sinais de envelhecimento. Além disso, pode ser utilizado como complemento em protocolos de rejuvenescimento facial.

Uma das grandes vantagens do PDRN é sua capacidade de estimular a regeneração dos tecidos de forma natural, favorecendo uma aparência mais uniforme e revitalizada.

Os resultados costumam aparecer gradualmente, proporcionando uma melhora progressiva da pele sem alterar a naturalidade dos traços faciais.

A indicação do tratamento deve sempre ser realizada por um profissional qualificado, garantindo segurança e um protocolo adequado para cada paciente.`
    },

    enzimas: {
        titulo: "Aplicação de Enzimas: Um Aliado nos Protocolos Corporais",
        texto: `A aplicação de enzimas é um procedimento estético amplamente utilizado como complemento em protocolos personalizados voltados para o contorno corporal e cuidados com a gordura localizada.

O tratamento consiste na aplicação de substâncias específicas em áreas previamente avaliadas pelo profissional. O objetivo é auxiliar nos tratamentos corporais, sempre de acordo com as características e necessidades individuais de cada paciente.

Entre os benefícios frequentemente associados ao procedimento estão o auxílio na redução de medidas, melhora do contorno corporal e complementação de programas de cuidados estéticos.

A aplicação de enzimas não substitui hábitos saudáveis, mas pode atuar como uma importante aliada quando associada a uma alimentação equilibrada, hidratação adequada e prática regular de atividades físicas.

Cada protocolo deve ser elaborado de forma personalizada, garantindo maior segurança e resultados compatíveis com os objetivos do paciente.

Antes de iniciar qualquer tratamento, é fundamental realizar uma avaliação profissional para identificar a melhor estratégia para cada caso.`
    }

};

function abrirBlog(tipo) {
    const blog = blogs[tipo];

    if (!blog) {
        alert("Conteúdo do blog não encontrado.");
        return;
    }

    document.getElementById("tituloBlog").innerText = blog.titulo;
    document.getElementById("textoBlog").innerText = blog.texto;

    document.getElementById("modalBlog").style.display = "flex";
}

function fecharBlog() {
    document.getElementById("modalBlog").style.display = "none";
}

const modalBlog = document.getElementById("modalBlog");

modalBlog.addEventListener("click", function (e) {
    if (e.target === modalBlog) {
        fecharBlog();
    }
});