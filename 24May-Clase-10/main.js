const form = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");
const botonAdd = document.querySelector("#agregar");


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

    console.log("HOLA YO");
    lista.remove();
    return;

});

// funcion arrow evento change variable de entrada

input.addEventListener("change", (e) => {

    console.log("HOLA YO/MI . onchange");
   

});
// eventos de mouseover y mouseout para controlar estilos de los botones
botonAdd.addEventListener("mouseover", () => {
    mousebotonAdd();
    console.log("Paso...1...botonAdd    -   mouseover");
 
});

botonlimpiar.addEventListener("mouseover", () => {
    mousebotonlimpiar();
    console.log("Paso...1....botonlimpiar    -   mouseover");
 
});

botonlimpiar.addEventListener("mouseout", () => {
    estiloBotonLimpiar();
    estiloBotonesAdd();
 //   console.log("Paso...1....botonlimpiar    -   mouseout")
});

botonAdd.addEventListener("mouseout", () => {
  estiloBotonLimpiar();
    estiloBotonesAdd();
    console.log("Paso...2.....botonAdd    -   mouseout");
    return;
});



// funcion arrow evento click boton agregar

botonAdd.addEventListener("click", (e) => {

    console.log("HOLA YO/MI . click");
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
            input.value = "";

        //querySelector inicializar listas de tareas

        const tareasAdd = document.querySelectorAll("li");

        console.log("tareasAdd : ",tareasAdd);  
        console.log("tareasAdd antes: ",tareasAdd);  

// Estructura de control para Eliminar tarea

    tareasAdd.forEach((tarea, index) => {

        console.log("Antes de eliminar - tarea: " , tarea);

        const botonEliminar = tarea.querySelector(".eliminar");

        botonEliminar.addEventListener("click", ()  => {
            lista.removeChild(tarea);

            const p = document.createElement("p");
            p.innerHTML = 'Tarea se elimino correctamente';
        

    });
});

/***    Fin Aqui    ***/

// Cambiar estilo al formulario cuando se agregan las tareas
            const cuerpo = document.querySelector("body");

            form.style.backgroundColor="#f34f23";        /*color cereza*/
            cuerpo.style.backgroundColor="#e4dbda";      /*color amarillento*/ 

    };
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
    mensaje.style.border="2px solid black";
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
    botonlimpiar.style.border="2px solid black";   
    botonlimpiar.style.borderRadius="10px";   

}    

function estiloBotonesAdd(){
    
    botonAdd.style.color="rgb(0, 0, 0)";
    botonAdd.style.backgroundColor="rgb(255, 255, 255)";
    botonAdd.style.cursor= "pointer";
    botonAdd.style.height="32px";
    botonAdd.style.textAlign= "center";
    botonAdd.style.border="2px solid black";   
    botonAdd.style.borderRadius="10px";
    console.log("Paso...3.....estilobotonesAdd");

}


function mousebotonAdd(){
 
    botonAdd.style.color="rgb(255, 255, 255)";
    botonAdd.style.backgroundColor="rgb(16, 2, 66)";
    botonAdd.style.cursor= "pointer";
    botonAdd.style.height="32px";
    botonAdd.style.textAlign= "center";
    botonAdd.style.border="2px solid";   
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
    botonlimpiar.style.border="2px solid";   
    botonlimpiar.style.fontWeight= "bold";
    botonlimpiar.style.borderBottomColor= "rgb(255, 255, 255)";
    botonlimpiar.style.borderRadius="10px";
}
    
