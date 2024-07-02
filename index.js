const form = document.querySelector('#form')
const body = document.querySelector('body')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const button = document.querySelector('#button')
 
const handleTelefone = (event) => {
    let input = event.target
    input.value = mascaraTelefone(input.value)
}

const mascaraTelefone = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    enviar()
});

function enviar() {
    var dados = {
        Nome: nome.value,
        Email: email.value,
        Telefone: telefone.value
    }

    if (nome.value == "" || nome.value == null) {
        alert("Informe um nome");
        return;
    }

    if (email.value == "" || email.value == null) {
        alert("Informe um email");
        return;
    }

    if (telefone.value == "" || telefone.value == null) {
        alert("Informe um telefone");
        return;
    }

    body.innerHTML = "<h3>Obrigado por seu cadastro!</h3>"
    console.log(dados)
}