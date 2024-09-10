function calcularIMC(altura,peso){
    return peso / (altura * altura);
}

function resolver() {
    // Obtener los valores del formulario
    let nombre = document.getElementById("valorNombre").value;
    let apellido = document.getElementById("valorApellido").value;
    let peso = parseFloat(document.getElementById("valorPeso").value);
    let altura = parseFloat(document.getElementById("valorAltura").value);

    // Calcular el IMC
    let imc = calcularIMC(altura,peso);
    console.log(imc);

}
