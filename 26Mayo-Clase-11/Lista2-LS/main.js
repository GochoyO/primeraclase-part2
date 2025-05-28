const form = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");
const boton = document.getElementById("agregarBoton");

let tareas = [];

if(localStorage.getItem("tareas")){
    tareas = JSON.parse(localStorage.getItem("tareas"));

    mostrarTareas();
};

form.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita que se recargue la página
    let tarea = input.value.trim(); //trim() elimina los espacios en blanco al inicio y al final de la cadena

    if(tarea === "" || tarea.length < 3){
        mensaje.innerHTML = "Ingresa una tarea valida (mínimo 3 caracteres)";
        return;
    };

    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
    input.value = "";
});

function mostrarTareas(){
    lista.innerHTML = "";

    tareas.forEach((tarea, index) =>{
        let li = document.createElement("li");
        li.innerHTML = tarea + " ";

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            tareas.splice(index, 1); //Elimina el elemento de la lista
            localStorage.setItem("tareas", JSON.stringify(tareas)); //Actualiza el localStorage
            mostrarTareas();
        })

        li.appendChild(btnEliminar)
        lista.appendChild(li);
    })
};