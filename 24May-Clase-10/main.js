const form = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");
const botonAdd = document.querySelector("#agregar");
/*
if (!localStorage.getItem('checklist'))
    localStorage.setItem('checklist', "");
var checklist = [];
*/

// crear un elemento boton limpiar y agregarlo en el html

const botonlimpiar = document.createElement("button");

    botonlimpiar.innerHTML = "Limpiar";
    form.appendChild(botonlimpiar);

// Dar estilo a los botones
    
    estiloBotonLimpiar();
    estiloBotonesAdd();

// funcion arrow evento click boton limpiar

botonlimpiar.addEventListener("click", (e) => {
    //e.preventDefault();

    botonAdd.style.backgroundColor="red";
    botonAdd.style.color="white";
    botonAdd.style.padding="9px";
    botonAdd.style.border="2px solid green";
    botonAdd.style.borderRadius="15px";

    localStorage.clear();
    lista.innerHTML = "";
    mensaje.innerHTML = "";

    return;

});

// funcion arrow evento change variable de entrada

input.addEventListener("change", (e) => {
  //console.log("HOLA YO/MI . onchange....mas nada");

 return;

});
// eventos de mouseover y mouseout para controlar estilos de los botones
botonAdd.addEventListener("mouseover", () => {
    mousebotonAdd();
//    console.log("Paso...1...botonAdd    -   mouseover");
});

botonlimpiar.addEventListener("mouseover", () => {
    mousebotonlimpiar();
 //   console.log("Paso...1....botonlimpiar    -   mouseover");
});

botonlimpiar.addEventListener("mouseout", () => {
    estiloBotonLimpiar();
    estiloBotonesAdd();
 //   console.log("Paso...1....botonlimpiar    -   mouseout")
});

botonAdd.addEventListener("mouseout", () => {
  estiloBotonLimpiar();
    estiloBotonesAdd();
  //  console.log("Paso...2.....botonAdd    -   mouseout");
    return;
});

// funcion arrow evento click boton agregar

botonAdd.addEventListener("click", (e) => {

 //   console.log("HOLA YO/MI . click");
    e.preventDefault(); //Previene la actualizacion de la pagina cada que hago un submit

    const text = input.value.trim(); //trim nos ayuda a quitar espacios al inicio y final de nuestro texto

    if(text === "" || text.length < 3){
 
        tareaAlerta();
        /*return;*/
    }
    else{
        tareaOk();
 
//Crear elemento a partir de la variable text y agregarlo a la lista

        const li = document.createElement("li");

        li.innerHTML = `${text} <button class=\"eliminar\">Eliminar</button>`;
        lista.appendChild(li);
        console.log("agregando tarea:",text);
        localStorage.setItem(text, text);       //agregar valor localStorage

//Inicializar entrada de datos
        input.value = "";

//querySelector inicializar listas de tareas
        const tareasAdd = document.querySelectorAll("li");

// Estructura de control para Eliminar tarea
    tareasAdd.forEach((tarea, indice) => {
        const botonEliminar = tarea.querySelector(".eliminar");
        //estilo
        botonEliminar.style.cursor= "pointer";

        //  botonEliminar.addEventListener("click", ()  => {        
        botonEliminar.addEventListener("click", ()  => {        
            let valor = tarea.innerText.replace("Eliminar", "").trim();
        console.log("Eliminando tarea........:", valor);
            localStorage.removeItem(valor);
            lista.removeChild(tarea);
        });
    });                  //fin forEach       
/***    Fin Aqui    ***/

// Cambiar estilo al formulario cuando se agregan las tareas
            const cuerpo = document.querySelector("body");

            form.style.backgroundColor="#f34f23";        /*color cereza*/
            cuerpo.style.backgroundColor="#e4dbda";      /*color amarillento*/ 

    };   //Fin Else - OK
}); 


// APARTADO FUNCIONES GENERALES


function tareaAlerta() {
    mensaje.innerHTML = "Ingresa una tarea valida (mínimo 3 caracteres)";
    mensaje.style.color="red";
    mensaje.style.size="medium";
    mensaje.style.borderRadius="15px";
    mensaje.style.padding="10px";
    mensaje.style.border="0.6px solid red";
    mensaje.style.marginleft= "250px";

    return;
}

function tareaOk(){
    mensaje.innerHTML = "Tarea Valida";
    mensaje.style.color="blue";
    mensaje.style.size="medium";
    mensaje.style.border="3px solid black";
    mensaje.style.backgroundColor="white";
    mensaje.style.borderRadius="15px";
    mensaje.style.padding="10px";
    mensaje.style.marginleft= "250px";

}

function estiloBotonLimpiar(){
    botonlimpiar.style.color="rgb(0, 0, 0)";
    botonlimpiar.style.backgroundColor="rgb(255, 255, 255)";
    botonlimpiar.style.cursor= "pointer";
    botonlimpiar.style.height="32px";
    botonlimpiar.style.textAlign= "center";
    botonlimpiar.style.border="3px solid black";   
    botonlimpiar.style.borderRadius="10px";   

}    

function estiloBotonesAdd(){   
    botonAdd.style.color="rgb(0, 0, 0)";
    botonAdd.style.backgroundColor="rgb(255, 255, 255)";
    botonAdd.style.cursor= "pointer";
    botonAdd.style.height="32px";
    botonAdd.style.textAlign= "center";
    botonAdd.style.border="3px solid black";   
    botonAdd.style.borderRadius="10px";

}

function mousebotonAdd(){
    botonAdd.style.color="rgb(255, 255, 255)";
    botonAdd.style.backgroundColor="rgb(16, 2, 66)";
    botonAdd.style.cursor= "pointer";
    botonAdd.style.height="32px";
    botonAdd.style.textAlign= "center";
    botonAdd.style.border="3px solid";   
    botonAdd.style.fontWeight= "bold";
    botonAdd.style.borderBottomColor= "rgb(255, 255, 255)";
    botonAdd.style.borderRadius="10px";
}

function mousebotonlimpiar(){
    botonlimpiar.style.color="rgb(255, 255, 255)";
    botonlimpiar.style.backgroundColor="rgb(16, 2, 66)";
    botonlimpiar.style.cursor= "pointer";
    botonlimpiar.style.height="32px";
    botonlimpiar.style.textAlign= "center";
    botonlimpiar.style.border="3px solid";   
    botonlimpiar.style.fontWeight= "bold";
    botonlimpiar.style.borderBottomColor= "rgb(255, 255, 255)";
    botonlimpiar.style.borderRadius="10px";
}
    