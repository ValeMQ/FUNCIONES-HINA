console.log("-------")

function Comparar(a, b, c) {
    /* let a = 4
    let b = 50
    let c = 6 */

    if (a >= b && a >= c) {
        console.log("El número más grande es: " + a);
    } else if (b >= a && b >= c) {
        console.log("El número más grande es: " + b);
    } else {
        console.log("El número más grande es: " + c);
    }
}

function Saludo() {
    let nombre = 1
    let apellido = 2
    let estadocivil = 1
    if (estadocivil = 2) {
        console.log("hola", nombre, apellido, "divorciado")
    } else {
        console.log("casado")
    }
}

Comparar(6, 50, 4)
Comparar(4, 50, 6)
Comparar(50, 50, 50)

Comparar(50, 6, 4)

//console.log("fuera", a)
Saludo()