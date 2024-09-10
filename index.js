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

function mostrarResultado(nombre,apellido,imc,nivelIMC){
    let imcSpan = document.getElementById("imcSpan");
    imcSpan.innerHTML=imc.toFixed(2);
    let paciente = document.getElementById("paciente");
    paciente.innerHTML=nombre+' '+apellido+' ';
    let nivelPeso = document.getElementById("nivelPeso");
    nivelPeso.innerHTML=nivelIMC;
}
 // Validar los valores ingresados
 if (!nombre || !apellido || isNaN(peso) || isNaN(altura) || altura <= 0) {
    alert('Por favor, ingrese todos los datos correctamente.');
    return;
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
    mostrarResultado(nombre,apellido,imc,nivelIMC);
}
