let numero = parseInt(prompt('Ingresar numero'));

while (numero != 0) {
    if (numero % 2 === 0) {
        alert(`${numero} es un numero par`);
    }
    else {
        alert(`${numero} es un numero impar`);
    }
    numero = parseInt(prompt('Ingresar numero'));
}

