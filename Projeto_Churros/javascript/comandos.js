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


///////// Menu responsivo /////////
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../imagens/close_white_36dp.svg";
    }
}

///////// Modo Dark /////////
const login = document.getElementById("item-lua");

login.addEventListener("click", () => {
    const form = document.getElementById("container");

    if(login.classList.contains("fa-moon")){
        login.classList.remove("fa-moon");
        login.classList.add("fa-sun");

        form.classList.add("dark");
        return;
    }

    login.classList.remove('fa-sun');
    login.classList.add('fa-moon');

    form.classList.remove("dark");
});
/////////////////////////////////////////////////////////////


/////////// TELA DE CADASTRO ///////////
function validacao_cadastro(){
    
    ////////// VALIDAR SENHA //////////
    senha = document.getElementById("senha").value;
    conf_senha = document.getElementById("conf_enha").value;

    if (senha != conf_senha) {
        senhaC.setCustomValidity("Senhas diferentes!");
        return false;
    } else {
        return true;
    }
    
    
    
    
    
    const cpf = document.getElementById("cpf");
    validacaoCPF();

    /////////// CPF ///////////
    function validarCPF(cpf) {	
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf == '') return false;	
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 || 
            cpf == "00000000000" || 
            cpf == "11111111111" || 
            cpf == "22222222222" || 
            cpf == "33333333333" || 
            cpf == "44444444444" || 
            cpf == "55555555555" || 
            cpf == "66666666666" || 
            cpf == "77777777777" || 
            cpf == "88888888888" || 
            cpf == "99999999999")
                return false;

        // Valida 1o digito	
        add = 0;	
        for (i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9)))		
                return false;

        // Valida 2o digito	
        add = 0;	
        for (i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10)))
            return false;		
        return true;   
    }
}





/////////// Verificação do CEP ///////////
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
