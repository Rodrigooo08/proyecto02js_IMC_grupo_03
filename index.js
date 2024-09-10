function calcularIMC(altura,peso){
    return peso / (altura * altura);
}
function determinarNivel(resultado){
    let nivel = '';
    if (resultado < 18.5) {
        nivel = 'bajo peso';
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        nivel = 'peso saludable';
    } else if (resultado >= 25 && resultado <= 29.9) {
        nivel = 'sobrepeso';
    } else {
        nivel = 'obesidad';
    }
    return nivel;
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

    // Determinar el nivel de peso
    let nivelIMC = '';
    nivelIMC = determinarNivel(imc);
    console.log(nivelIMC);
}