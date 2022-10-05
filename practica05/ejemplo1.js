function cambiarColor(color) {
    console.log("el color es: ", color);
    var elem = document.getElementById("texto");
    elem.style.color = color;
}

function cambiarFondo1(color) {
    let x = document.getElementById("primero");
    x.style.background = color;

    let z = document.getElementById("segundo");
    z.style.background = 'white';
    x = document.getElementById("tercero");
    x.style.background = 'white';
    z = document.getElementById("cuarto");
    z.style.background = 'white';
}
function cambiarFondo(color) {
    let x = document.getElementById("primero");
    x.style.background = 'white';

    let z = document.getElementById("segundo");
    z.style.background = color;

    x = document.getElementById("tercero");
    x.style.background = 'white';
    z = document.getElementById("cuarto");
    z.style.background = 'white';
}
function cambiarTodoFondo(color) {
    let x = document.getElementById("primero");
    x.style.background = 'white';
    let z = document.getElementById("segundo");
    z.style.background = 'white';
    x = document.getElementById("tercero");
    x.style.background = 'white';
    z = document.getElementById("cuarto");
    z.style.background = 'white';

    let v = document.getElementById("body");
    v.style.background = color;
}

// colores mediante un ciclo for loops.
function cambiarColores(color) {
    let x = document.getElementsByTagName("p");
    // para los divs se ocupan desde 0 indican la cantidad de divs dependiendo el orden en el codigo es como va su #
    // x[0].style.color = color;
    // let x =document.getElementsByTagName("p");
    // for (let i = 0; i < x.length; i++) {
    //     x[i].style.color = color; 
    // }
    // ejemplod e for each
    var arr = [].slice.call(x);
    arr.forEach(element => {
        console.log(element);
    });
}
