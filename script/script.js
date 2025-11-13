const formPessoal = document.getElementById('form-pessoal');
if (formPessoal) {
    formPessoal.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Cadastro pessoal salvo com sucesso!");
        formPessoal.reset();
    });
    console.log("Script do Cadastro Pessoal carregado.");
}

const formEstudantil = document.getElementById('form-estudantil');
if (formEstudantil) {
    formEstudantil.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Cadastro estudantil salvo com sucesso!");
        formEstudantil.reset();
    });
    console.log("Script do Cadastro Estudantil carregado.");
}

const formPostal = document.getElementById('form-postal');
if (formPostal) {
    formPostal.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Cadastro postal enviado!");
        formPostal.reset();
    });
    console.log("Script do Cadastro Postal carregado.");
}