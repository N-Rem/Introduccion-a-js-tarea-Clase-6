const $agregarFamiliares = document.querySelector("#agregar-familiares");
const $agregarSalariosFamiliares = document.querySelector("#agregar-salarios-familiares");
const $calcularEdadSalarios = document.querySelector("#calcular");
const $empezarDeNuevo = document.querySelector("#empezar-de-nuevo");
const $cantidadDeFamiliares = document.querySelector("#cantidad-de-familia");
const cantidadSalarios = document.querySelectorAll(".salario").length;
$agregarFamiliares.onclick = function () {
    for (let i = 1; i <= $cantidadDeFamiliares.value; i++) {
        agregarFamiliar(i);
    }
    $agregarFamiliares.disabled = true;
}

$agregarSalariosFamiliares.onclick = function () {
    if (comprobarInputRadio($cantidadDeFamiliares.value)) {
        for (let i = 1; i <= $cantidadDeFamiliares.value; i++) {
            agregarSalarioAlFamiliar(i);
        }
        $agregarSalariosFamiliares.disabled = true;
    }
    else {
        alert("Completar formulario; si trabaja o no trabaja");
    }
}

$calcularEdadSalarios.onclick = function () {
    document.querySelector('#resultado-final').classList = "";
    if (comprobarInputsEdadVacios($cantidadDeFamiliares.value)) {
        resultadoFinalEdad($cantidadDeFamiliares.value);
        resultadoFinalSalario();
    }
    else {
        alert("partes del formulario sin completar");
    }
}

function resultadoFinalEdad(numerosDeFamiliares) {
    const $edadMayor = document.querySelector("#edad-mayor");
    const $edadMenor = document.querySelector("#edad-menor");
    const $edadPromedio = document.querySelector("#edad-promedio");
    $edadMayor.textContent = mayorEdad(numerosDeFamiliares);
    $edadMenor.textContent = menorEdad(numerosDeFamiliares);
    $edadPromedio.textContent = promedioEdad(numerosDeFamiliares);
}

function resultadoFinalSalario() {
    const $salarioMayor = document.querySelector("#salario-mayor");
    const $salarioMenor = document.querySelector("#salario-menor");
    const $salarioAnualPromedio = document.querySelector("#salario-anual-promedio");
    const $salarioMensualPromedio = document.querySelector("#salario-mensual-promedio");
    $salarioMayor.textContent = mayorSalario();
    $salarioMenor.textContent = menorSalario();
    $salarioAnualPromedio.textContent = promedioSalarioAnual();
    $salarioMensualPromedio.textContent = promedioSalarioMensual();
}

$empezarDeNuevo.onclick = function () {
    location.reload();
}
