
/* id del enlace que despliega el menú */
var lanzador = "#logo-menu";
/* id del menú que será desplegado */
var desplegable = "#menu";
/* clase que será agregada*/
var despliegaClase = "menu-desplegado";

/* declaramos las funciones */
function nav(){
	var lanz = document.querySelector(lanzador);
	lanz.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu(e){
	e.preventDefault();
	var despl = document.querySelector(desplegable);
	despl.classList.toggle(despliegaClase);
}

/* ejecutamos la función principal */
nav();
