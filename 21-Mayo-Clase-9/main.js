const form = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");
const botonAdd = document.querySelector("button");


const botonlimpiar = document.createElement("button");
    botonlimpiar.innerHTML = "Limpiar";
    form.appendChild(botonlimpiar);
    
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


botonlimpiar.addEventListener("click", (e) => {
    botonAdd.style.backgroundColor="red";
    botonAdd.style.color="white";
    botonAdd.style.padding="9px";
    botonAdd.style.border="2px solid green";
    botonAdd.style.borderRadius="15px";

    console.log("HOLA YO");
    lista.remove();
    return;

});


input.addEventListener("change", (e) => {

    console.log("HOLA YO . onchange");

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
botonAdd.addEventListener("click", (e) => {

    e.preventDefault(); //Previene la actualizacion de la pagina cada que hago un submit

    botonAdd.style.backgroundColor="red";
    botonAdd.style.color="white";
    botonAdd.style.padding="9px";
    botonAdd.style.border="2px solid green";
    botonAdd.style.borderRadius="15px";

    const text = input.value.trim(); //Nos ayuda a quitar espacios al inicio y final de nuestro texto

    if(text === "" || text.length < 3){
        mensaje.innerHTML = "Ingresa una tarea valida (mínimo 3 caracteres)";
        mensaje.style.color="red";
        mensaje.style.size="xx-large";
        mensaje.style.border="2px solid black";
        mensaje.style.fontWeight= "bold";
        mensaje.style.marginleft= "250px";

        return;}
    else{
        mensaje.innerHTML = "Tarea Valida";
        mensaje.style.color="blue";
        mensaje.style.size="xx-large";
        mensaje.style.border="2px solid black";
        mensaje.style.fontWeight= "bold";
        mensaje.style.marginleft= "250px";
 
    };

    const li = document.createElement("li");

    li.innerHTML = `${text} <button class=\"eliminar\">Eliminar</button>`;
    lista.appendChild(li);

    input.value = "";


 /** manipuler mensaje cuando el valor es valido */
   /* if(mensaje.value.text === "" && mensaje.value.text != ""){
        mensaje.innerHTML = "Tarea Valida";

 

/** agregar estilo al formulario */

    form.style.backgroundColor="#f34f23";        /*color cereza*/
    cuerpo.style.backgroundColor="#eaf323";      /*color amarillento*/ 


});