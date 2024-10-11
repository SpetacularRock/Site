
/*todas as vezes que esta funcao for chamada (clicada no simbolo) ela executará isso.*/
function mostramenu(){
    var opcoesmenu = document.getElementById("opcoesmenu");
    /*pego o elemento chamado opcoesmenu e atribuo a variavel1. Ou seja, aqui dentro tratarei ele como sendo a variavel1.*/

    if(opcoesmenu.style.display == "flex"){
        opcoesmenu.style.display = "none";
        /*se as opcoesmenu estiverem visiveis, feche-as*/
    } else{
        opcoesmenu.style.display = "flex";
        /*senão, mostre-as*/
    }
    }
