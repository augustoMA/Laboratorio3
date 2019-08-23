function mostrarB(numero, cadena) {
    if (cadena != null) {
        for (var i = 0; i < numero; i++) {
            console.log(cadena);
        }
    }
    else {
        console.log("-" + numero);
    }
}
mostrarB(2, "hola");
mostrarB(1);
