function calculate() {
        var altura =(document.getElementById("altura").value)/100;
        var peso = document.getElementById("peso").value;
        
        var imc = peso / (altura * altura);
        alert( "Seu IMC é:" + imc);
  
        if(altura == ""){
                alert("campo obrigatório")

        }

        if(peso == ""){
                alert("campo obrigatório")
        }
}
