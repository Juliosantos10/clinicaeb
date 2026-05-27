/*
// ================= ALTERNAR ENTRE PIX E CARTÃO =================
function mostrarTab(id, btn) {
    // Botões
    document.querySelectorAll('.tabs button')
        .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Conteúdos
    document.querySelectorAll('.tab-content')
        .forEach(c => c.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    esconderMensagens();
}

// ================= FINALIZAR PAGAMENTO =================
function finalizarPagamento(tipo) {
    esconderMensagens();

    let erro = false;

    // ---------- VALIDAÇÃO PIX ----------
    if (tipo === 'PIX') {
        const nomePix = document.getElementById('nomePix')?.value.trim();
        const cpfPix = document.getElementById('cpfPix')?.value.trim();

        if (!nomePix || !cpfPix) {
            erro = true;
        }

        if (!/^\d{11}$/.test(cpfPix)) {
            erro = true;
        }
    }

    // ---------- VALIDAÇÃO CARTÃO ----------
    if (tipo === 'Cartão') {
        const numero = document.getElementById('numeroCartao')?.value.replace(/\s/g, '');
        const nome = document.getElementById('nomeTitular')?.value.trim();
        const validade = document.getElementById('validade')?.value.trim();
        const cvv = document.getElementById('cvv')?.value.trim();

        if (!numero || !nome || !validade || !cvv) {
            erro = true;
        }

        if (!/^\d{16}$/.test(numero)) {
            erro = true;
        }

        if (!/^\d{3}$/.test(cvv)) {
            erro = true;
        }
    }

    // ---------- SE DER ERRO ----------
    if (erro) {
        document.getElementById('mensagemErro').style.display = 'block';
        return;
    }

    // ---------- SUCESSO ----------
    document.querySelector('.tabs').style.display = 'none';
    document.querySelectorAll('.tab-content')
        .forEach(c => c.classList.remove('active'));

    document.getElementById('mensagemSucesso').style.display = 'block';
}

// ================= VOLTAR PARA FORMAS DE PAGAMENTO =================
function voltarTabs() {
    esconderMensagens();

    document.querySelector('.tabs').style.display = 'flex';
    document.getElementById('pix').classList.add('active');

    document.querySelectorAll('.tabs button')
        .forEach(b => b.classList.remove('active'));
    document.querySelector('.tabs button:first-child').classList.add('active');
}

// ================= FUNÇÕES AUXILIARES =================
function esconderMensagens() {
    document.getElementById('mensagemSucesso').style.display = 'none';
    document.getElementById('mensagemErro').style.display = 'none';
}

// ================= MÁSCARA CARTÃO =================
const numeroCartao = document.getElementById('numeroCartao');
if (numeroCartao) {
    numeroCartao.addEventListener('input', function (e) {
        let v = e.target.value.replace(/\D/g, '').substring(0, 16);
        v = v.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = v;
    });
}

// ================= BLOQUEAR LETRAS NO CPF PIX =================
const cpfPix = document.getElementById('cpfPix');
if (cpfPix) {
    cpfPix.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '').substring(0, 11);
    });
}   
    */