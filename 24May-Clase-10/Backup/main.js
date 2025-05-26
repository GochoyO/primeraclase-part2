const form = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");
const botonAdd = document.querySelector("#agregar");

//const fondoOriginal = document.body.style.backgroundColor.

// crear un elemento boton limpiar y agregarlo en el html

const botonlimpiar = document.createElement("button");

    botonlimpiar.innerHTML = "Limpiar";
    form.appendChild(botonlimpiar);

// Dar estilo a los botones
    
    estiloBotones();

// funcion arrow evento click boton limpiar

botonlimpiar.addEventListener("click", (e) => {
    //e.preventDefault();

    botonAdd.style.backgroundColor="red";
    botonAdd.style.color="white";
    botonAdd.style.padding="9px";
    botonAdd.style.border="2px solid green";
    botonAdd.style.borderRadius="15px";

    console.log("HOLA YO");
    lista.remove();
    return;

});

// funcion arrow evento change variable de entradar

input.addEventListener("change", (e) => {

    console.log("HOLA YO/MI . onchange");

    botonAdd.style.backgroundColor="SpringGreen";
    botonAdd.style.color="black";
    botonAdd.style.padding="9px";
    botonAdd.style.border="2px solid black";
    botonAdd.style.borderRadius="15px";
    botonAdd.style.marginRight= "60px";
    botonAdd.style.cursor= "pointer";
    

});

//form.addEventListener("submit", (e) => 
/*
botonAddtonAdd.addEventListener("mouseover", (e) => {
    botonAdd.style.backgroundColor="blue";
    botonAdd.style.color="white";
    botonAdd.style.padding="9px";
    botonAdd.style.border="1px solid black";
    botonAdd.style.borderRadius="15px";
    botonAdd.style.marginRight= "60px";
    botonAdd.style.cursor= "pointer";

})
*/

// funcion arrow evento click boton agregar

botonAdd.addEventListener("click", (e) => {

    console.log("HOLA YO/MI . click");
    e.preventDefault(); //Previene la actualizacion de la pagina cada que hago un submit

    botonAdd.style.backgroundColor="red";
    botonAdd.style.color="white";
    botonAdd.style.padding="9px";
    botonAdd.style.border="2px solid green";
    botonAdd.style.borderRadius="15px";

    const text = input.value.trim(); //trim nos ayuda a quitar espacios al inicio y final de nuestro texto

    if(text === "" || text.length < 3){
 
        tareaAlerta();
        /*return;*/
    }
    else{
        tareaOk();
 
//Crear elemento a partir de la variable text y agregarlo a la lista
// style="width: ${200}px; height: ${70}px;"

        const li = document.createElement("li");

            li.innerHTML = `${text} <button class=\"eliminar\">Eliminar</button>`;
            lista.appendChild(li);
            input.value = "";

        //querySelector inicializar listas de tareas

        const tareasAdd = document.querySelectorAll("li");

    tareasAdd.forEach((tarea, index) => {

        console.log("Antes de eliminar - tarea: " , tarea);
        console.log("Antes de eliminar - index: " , index);

        const botonEliminar = tarea.querySelector(".eliminar");

        botonEliminar.addEventListener("click", ()  => {

            console.log("1.-tarea eliminada");
            console.log("1.-tarea eliminada - tarea: " , tarea);
       
            lista.removeChild(tarea);

            const p = document.createElement("p");
            p.innerHTML = 'Tarea se elimino correctamente';
            
   

    });
});
/*
const node = document.getElementById("child");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
*/

//***Fin Aqui ---------------------------------------------------------------------***


// Agregar estilo al formulario cuando se agrega una tarea

            const cuerpo = document.querySelector("body");

            form.style.backgroundColor="#f34f23";        /*color cereza*/
            cuerpo.style.backgroundColor="#eaf323";      /*color amarillento*/ 

    };
}); 


// APARTADO FUNCIONES

function tareaAlerta() {

    mensaje.innerHTML = "Ingresa una tarea valida (mínimo 3 caracteres)";
    mensaje.style.color="red";
    mensaje.style.size="xx-large";
    mensaje.style.border="2px solid black";
    mensaje.style.fontWeight= "bold";
    mensaje.style.marginleft= "250px";
    return;
}

function tareaOk(){

    mensaje.innerHTML = "Tarea Valida";
    mensaje.style.color="blue";
    mensaje.style.size="xx-large";
    mensaje.style.border="2px solid black";
    mensaje.style.fontWeight= "bold";
    mensaje.style.marginleft= "250px";
    

}

function estiloBotones(){

    botonlimpiar.style.backgroundColor="SpringGreen";
    botonlimpiar.style.color="black";
    botonlimpiar.style.padding="9px";
    botonlimpiar.style.border="1px solid black";
    botonlimpiar.style.borderRadius="15px";
    botonlimpiar.style.gap= "400px";
    botonlimpiar.style.cursor= "pointer";

    
    botonAdd.style.backgroundColor="SpringGreen";
    botonAdd.style.color="black";
    botonAdd.style.padding="9px";
    botonAdd.style.border="2px solid black";
    botonAdd.style.borderRadius="15px";
    botonAdd.style.marginRight= "60px";
    botonAdd.style.cursor= "pointer";

}
