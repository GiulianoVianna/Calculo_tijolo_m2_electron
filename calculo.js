function calculo() {

    var tipo_tijolo = document.getElementById("id_tijolo").value;
    var largura = document.getElementById("largura").value.replace(",", ".");
    var altura = document.getElementById("altura").value.replace(",", ".");
    var quatidade_m2;


    /* Valida preenchimento dos campos */

    if (tipo_tijolo == "Tipo de tijolo"){
        alert("Favor informar um tipo de tijolo!");
        document.getElementById("id_tijolo").focus();
    }
    else if( largura == ""){
        alert("Favor informar a largura!");
        document.getElementById("largura").focus();
    }
    else if( altura == ""){
        alert("Favor informar a altura!");
        document.getElementById("altura").focus();
    }
    else{
        quatidade_m2 = largura * altura;
        document.getElementById("valor").value = quatidade_m2.toFixed(2);

        if (tipo_tijolo == "6 furos"){
            /* 0.0252 - medida em m2 do tijolo de 6 furos*/
            document.getElementById("resultado").value = ((largura * altura) / 0.0252).toFixed(0);
        }
        else if (tipo_tijolo == "8 furos"){
            /* 0.0361 - medida em m2 do tijolo de 8 furos*/
            document.getElementById("resultado").value = ((largura * altura) / 0.0361).toFixed(0);
        }
        else if (tipo_tijolo == "9 furos"){
            /* 0.0551 - medida em m2 do tijolo de 9 furos*/
            document.getElementById("resultado").value = ((largura * altura) / 0.0551).toFixed(0);
        }
    }

}

function limpar(){
    document.getElementById("id_tijolo").value = "Tipo de tijolo"
    document.getElementById("largura").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("resultado").value = ""
}