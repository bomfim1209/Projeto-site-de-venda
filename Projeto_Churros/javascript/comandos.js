///////// Validação tela de login /////////
function validacao(){
    var email = document.getElementById("email-validacao");
    if(email.value == !email){
        alert("Usuario não informado");
        email.focus();
    }

    var senha = document.getElementById("senha-validacao");
    if(senha.value == !senha){
        alert("Senha não informada")
        senha.focus();
    }
}


///////// Modo Dark /////////
const mode = document.getElementById("icone-lua");

mode.addEventListener("click", () => {
    const form = document.getElementById("container-login");

    if(mode.classList.contains("fa-moon")){
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");

        form.classList.add("dark");
        return;
    }

    mode.classList.add("fa-sun");
    mode.classList.remove("fa-moon");
    form.classList.remove("dark");
});


/////////////////////////////////////////////////////////////
// Verificação do CEP
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('Rua/Avenida').value=("");
    document.getElementById('Bairro').value=("");
    document.getElementById('Cidade').value=("");
    document.getElementById('Estado').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('Rua/Avenida').value=(conteudo.logradouro);
    document.getElementById('Bairro').value=(conteudo.bairro);
    document.getElementById('Cidade').value=(conteudo.localidade);
    document.getElementById('Estado').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = document.getElementById("cep");

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('Rua/Avenida').value="...";
        document.getElementById('Bairro').value="...";
        document.getElementById('Cidade').value="...";
        document.getElementById('Estado').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};
/////////////////////////////////////////////////////////////


// Validar E-mail
function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


// Validação da data
function validate() {
    $("#result").text("");
    var emailaddress = $("#email").val();
    if (validateEmailAddress(emailaddress)) {
        $("#result").text(emailaddress + " is valid :)");
        $("#result").css("color", "green");
    } else {
        $("#result").text(emailaddress + " is not correct, please retry:(");
        $("#result").css("color", "red");
    }
    return false;
}
$("#validate").bind("click", validate);