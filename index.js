function calcularIMC(altura,peso){
    return peso / (altura * altura);
}
function determinarNivel(resultado){
    let nivel = '';
    if (resultado < 18.5) {
        nivel = 'Bajo peso';
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        nivel = 'Peso saludable';
    } else if (resultado >= 25 && resultado <= 29.9) {
        nivel = 'Sobrepeso';
    } else {
        nivel = 'Obesidad';
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

    let imagenResultado = document.getElementById("imagenResultado");
    
    if (nivelIMC === 'Bajo peso') {
        imagenResultado.src = "imagenes/bajo_peso.png"; // Cambia la ruta por la correcta
    } else if (nivelIMC === 'Peso saludable') {
        imagenResultado.src = "imagenes/peso_saludable2.webp";
    } else if (nivelIMC === 'Sobrepeso') {
        imagenResultado.src = "imagenes/sobrepeso.png";
    } else if (nivelIMC === 'Obesidad') {
        imagenResultado.src = "imagenes/obesidad.png";
    }

    // Mostrar la imagen
    imagenResultado.style.display = "block";
}

function resolver() {
    // Obtener los valores del formulario
    let nombre = document.getElementById("valorNombre").value;
    let apellido = document.getElementById("valorApellido").value;
    let peso = parseFloat(document.getElementById("valorPeso").value);
    let altura = parseFloat(document.getElementById("valorAltura").value);
     // Validar los valores ingresados
 if (!nombre || !apellido || isNaN(peso) || isNaN(altura) || altura <= 0) {
    alert('Por favor, ingrese todos los datos correctamente.');
    return;
}


    // Calcular el IMC
    let imc = calcularIMC(altura,peso);
    console.log(imc);

    // Determinar el nivel de peso
    let nivelIMC = '';
    nivelIMC = determinarNivel(imc);
    console.log(nivelIMC);
    mostrarResultado(nombre,apellido,imc,nivelIMC);
}
