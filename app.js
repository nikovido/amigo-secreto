// Lógica de amigo-secreto:
// Vamos a agregar los nombres que se introduzcan en el input a listaAmigos[], siempre que no este vacio o el nombre ya se encuentre ingresado en la lista
// Vamos a elegir aleatoriamiente uno de los nombres de la lista para ser el amigo-secreto
// Vamos a dejar la logica en js pero editar la listas (la de amigos y la del resultado) del HTML

let listaAmigos = [];
let amigo = '';


function agregarAmigo () {
	amigo = document.getElementById('amigo').value; // seleccionamos el texto del input
	const lista = document.getElementById('listaAmigos'); // seleccionamos la lista de amigos en el HTML
	// Validamos que no este vacio y que el nombre no haya sido ingresado
	if (amigo != '' && !listaAmigos.includes(amigo)) {
		agregarAmigoListaHTML(lista, amigo) // agregamos al amigo a la lista en HTML
		listaAmigos.push(amigo); // agregamos al amigo a la lista en JS
		limpiarInput(); // limpiamos el input
		amigo = ''; // limpiamos el valor del último amigo
		console.log("Lista de amigos: "+ listaAmigos);
	} else {
		// Si no es válido avisamos y reiniciamos el input
		alert('El nombre ingresado no es válido o ya habia sido ingresado. Por favor intente nuevamente.');
		limpiarInput();
	}
}

// función para sortear amigo
function sortearAmigo(){
	const lista = document.getElementById('resultado'); // seleccionamos la lista de resultado en el HTML
	const numeroRandom = Math.floor(Math.random() * listaAmigos.length); // hacemos un random con la longitud de lista de amigos en js
	const amigoAleatorio = listaAmigos[numeroRandom]; // obtenemos el valor del amigo con el indice

	if (listaAmigos.length > 0){
		lista.innerHTML = ''; // limpiamos primero la lista de amigos sorteados
		agregarAmigoListaHTML(lista, 'El amigo secreto es: ' + amigoAleatorio); // agregamos al amigo a la lista HTML de resultado
		console.log("Amigo sorteado: "+ amigoAleatorio);
		} else {
			alert("Debe agregar al menos un amigo para realizar el sorteo.");
		}
}

// función para agregar texto a una lista
function agregarAmigoListaHTML (lista, amigo) {
	const listaSeleccionada = lista;
	const nuevoAmigo = document.createElement('li'); // creamoss en el nuevo item
	nuevoAmigo.textContent = amigo; // Asignamos al nuevo item el nombre del amigo
	listaSeleccionada.appendChild(nuevoAmigo); // agregamos a la lista en el HTML el nombre del amigo
}

// función para limpiar el input amigo
function limpiarInput(){
	document.getElementById('amigo').value = '';
}