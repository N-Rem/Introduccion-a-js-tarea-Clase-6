function validarCantidadFamiliares(cantidadDeFamiliares) {
    const espacioVacio = "";
    const numeroCero = 0
    if (cantidadDeFamiliares === espacioVacio || cantidadDeFamiliares === numeroCero) {
        return "el input de cantidad de familiares esta vacio";
    }
    return "";
}
function validarNombre(nombre) {
    const espacioVacio = "";
    if (nombre === espacioVacio) {
        return "El input de Nombre esta vacio";
    }
    if (!/^[A-z]+$/i.test(nombre)) {
        return "El nombre solo debe contener letras";
    }
    return "";
}
function validarEdad(edad) {
    const numeroCero = 0;
    if (edad === numeroCero) {
        return "El input de Edad esta vacio";
    }
    else if (!Number.isInteger(edad)) {
        return "La edad debe ser un numero entero";
    }
    return "";
}
function validarInputTrabajo(valorInputRadio) {
    const noCheck = "";
    if (valorInputRadio === noCheck) {
        return "hay valores no chequeados"
    }
    return "";
}
function validarSalarioAnula(salario) {
    const numeroCero = 0;
    if (salario === numeroCero) {
        return "debe ingresar un salario anual."
    }
    return "";
}




