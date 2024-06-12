////////////////// COMPONENTES COMUNS //////////////////
////// Teste de DropDown ///////

function toggleMenu(){
    let subMenu = document.getElementById("subMenu");

    subMenu.classList.toggle("open-menu");
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
};

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


////////////////// TELA DE CADASTRO //////////////////
///////// Mascaras dos Inputs /////////

function mascaraCPF(){
    const cpfOrganizar = document.getElementById('cpf');

    cpfOrganizar.addEventListener('input', () => {
        let dado = cpfOrganizar.value.length;

        if(dado === 3 || dado === 7){
            cpfOrganizar.value += '.';
        }else if(dado === 11){
            cpfOrganizar.value += '-';
        }
    })
};


function mascaraTelefone(){
    const teleOrganizar = document.getElementById('tel_celular');

    teleOrganizar.addEventListener('input', () => {
        var tel = teleOrganizar.value.replace(/\D/g,"").substring(0,11); //Romove tudo o que não for numero do campo.
        var telef = tel.split(""); //Separa a string em caracters individuais.
        var telefone = "";

        if(telef.length > 0){
            telefone += `(${telef.slice(0,2).join("")})`;
        }
        if(telef.length > 2){
            telefone += `${telef.slice(2,7).join("")}`;
        }
        if(telef.length > 7){
            telefone += `-${telef.slice(7,11).join("")}`;
        }

        teleOrganizar.value = telefone;
    })
};

/////////// Verificação do CEP ///////////
function buscarEndereco() {
    var cep = document.getElementById("cep").value;
    if (cep.length != 8) {
        alert("CEP inválido");
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var endereco = JSON.parse(xhr.responseText);
            document.getElementById("logradouro").value = endereco.logradouro;
            document.getElementById("bairro").value = endereco.bairro;
            //document.getElementById("uf").value = endereco.uf;
        }
    }
    xhr.send();
}


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
/////////////////////////////////////////////////////////////


////////////////// TELA DE LOGIN //////////////////
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
};
/////////////////////////////////////////////////////////////