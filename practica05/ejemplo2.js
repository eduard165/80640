function AGREGAR(x) {
    //creo un nodo de tipi "li" este nodo servira para poder ingresa un elemento nuevo a nuestra lista "ul" li es lista
    nodo = document.createElement("li");
    // con esto agregaremos un texto pero mandandoselo como contenido de nuestro nodo, siguiente linea se manda, aqui solo 
    // solo se almacenara de la variable texto
    texto = document.createTextNode(x);
    //agrega un hijo a la clase ya previamanete cargada dentro de del html
    nodo.appendChild(texto);

    // le damos los atributos necesarios al nodo para que lo reconozca como tal 
    nodo.setAttribute("id", texto);
    document.getElementById("lista").appendChild(nodo);
}

function optenerDatos() {
    // para poder obtener los valores de nuestro input debemos declarar una variable la cual almacenara el texto ingresado
    // despues optiene el valor pero no como lo otro si no que antes de terminar necesita valuar los datos optenidos
    var x = document.getElementById("label").value;
    // es system.out
    console.log(x);
    //recuersividad
    AGREGAR(x);
}
// optenerDatos();
// con esta funcion podemos pedir datos y agregarlos automaticamente en las listas tuilizando nodos, ya previamente visto en 
// estrustura de datos.

function buscar() {
    // let todoo = document.querySelectorAll('li');
    // let busc = document.getElementById('label');
    // todoo.forEach(element => {
    //     if(element.id == busc){
    //         alert("si hay ese")
    //     }
    // }); 
    var x = document.getElementById("label").value;
    if (document.getElementById(x) == null) {
        alert("si hay");
    } else {
        alert("no hay");
    }
}
   function buscar22(){
        let listaTodo = document.querySelectorAll('li');
       let buscar = document.getElementById('label').value;
      let arr= [].slice.call(listaTodo);

        for( let i of arr){
          if(i.innerHTML == buscar){
              alert("si esta");         }
        }

   }
function buscar2() {
    todo = document.getElementsByTagName("li");
    var x = document.getElementById("label").value;
    for (let i = 0; i < todo.length; i++) {
        const tarea = todo[i];
        if (x == tarea.textContent) {
            alert(tarea.innerHTML);
        }
    }

}
//creo que todas las funciones srven y sirven para buscar dentro del arreglo 

function buscar3() {
    todo = document.getElementsByTagName("li");
    var x = document.getElementById("label").value;
    for (const tarea of todo) {
        if (x == tarea.textContent) {
            alert("si existe")
        }
    }
}
function buscar4() {
    todo = document.getElementsByTagName("li");
    var x = document.getElementById("label").value;
    for (const tarea in todo) {
        // if (Object.hasOwnProperty.call(todo, tarea)) {
        //     const element = todo[tarea];
        //     alert("si");
        // }
        if (Object.hasOwnProperty.call(todo, tarea)) {
            const element = todo[tarea].childNodes[0];
            alert(tarea.innerHTML);
        }
    }
}
function x(params){
    if(event.key == 'Enter'){
        AGREGAR();
    }
}
function buscar5(){
    listaTodo = document.getElementsByTagName("li");
    for(let tarea in listaTodo){
        if (Object.hasOwnProperty.call(todo, tarea)) {
            const element = todo[tarea].childNodes[0];
            alert(tarea.innerHTML);
        
        a = listaTodo[tarea].childNodes[0];
        b= document.getElementsById("label").value;

        if(a == b){
            alert(tarea.innerHTML);
        }
    }
    }
}