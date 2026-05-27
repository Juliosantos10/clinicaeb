// ================= MÁSCARA CPF =================
document.getElementById("cpf").addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = valor;
});

document.getElementById("senha").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});

// ================= MÁSCARA TELEFONE =================
document.getElementById("telefone").addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    } else if (valor.length > 2) {
        valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    }

    this.value = valor;
});

// ================= VALIDA CPF =================
function cpfValido(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * (10 - i);
    }

    let digito1 = (soma * 10) % 11;
    if (digito1 === 10) digito1 = 0;
    if (digito1 != cpf[9]) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * (11 - i);
    }

    let digito2 = (soma * 10) % 11;
    if (digito2 === 10) digito2 = 0;

    return digito2 == cpf[10];
}

// ================= VALIDA EMAIL =================
function emailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ================= SUBMIT CADASTRO =================
document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    // CAMPOS OBRIGATÓRIOS
    if (!nome || !cpf || !email || !telefone) {
        alert("Preencha todos os campos!");
        return;
    }

    // CPF
    if (!cpfValido(cpf)) {
        alert("CPF inválido!");
        return;
    }

    if (!nome || !cpf || !email || !telefone || !senha) {
    alert("Preencha todos os campos!");
    return;
}

//senha

if (senha.length < 6) {
    alert("A senha deve conter pelo menos 6 números!");
    return;
}

    // EMAIL
    if (!emailValido(email)) {
        alert("E-mail inválido!");
        return;
    }

    // TELEFONE
    if (telefone.replace(/\D/g, "").length < 10) {
        alert("Telefone inválido!");
        return;
    }

    // SALVAR USUÁRIO
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const emailExiste = usuarios.some(u => u.email === email);
    if (emailExiste) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    usuarios.push({
        nome,
        cpf,
        email,
        telefone,
        senha: "123456" // senha padrão
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../index.html";
});