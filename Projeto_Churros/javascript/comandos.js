(function(){ 
 
    const cep = document.querySelector("input[name=cep]");
 
    cep.addEventListener('blur', e=> {
        const value = cep.value.replace(/[^0-9]+/, '');
        const url = `https://viacep.com.br/ws/${value}/json/`;
 
        fetch(url)
        .then( response => response.json())
        .then( json => {
            if( json.logradouro ) {
                document.querySelector('input[name=rua]').value = json.logradouro;
                document.querySelector('input[name=bairro]').value = json.bairro;
                document.querySelector('input[name=cidade]').value = json.localidade;
                document.querySelector('input[name=estado]').value = json.uf;
            }
        });
    });
 
})();



function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

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