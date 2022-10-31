
alert(
	'Hola hola señorita Dayana, yo le dije hace ratico que era programador, y se me ocurrio la brillante idea de hacerle este mini juego, espero le guste'
);

class Persona {
	constructor(nombre, apellido, edad, cedula) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.cedula = cedula;
	}

	registro() {
		this.nombre = prompt('Aca debe escribir el bello nombre que le dio su madre al nacer...');

		this.apellido = prompt('Aca escriba el nombre de quien hizo este cagada de juego:');

		this.edad = parseInt(prompt('Ahora ingrese que edad tiene: '));
		while (isNaN(this.edad) || this.edad <= 0) {
			this.edad = parseInt(prompt('Ingrese, jajja si jodo no? yayya esta el la ultima, ingrese que siente por el: '));
		}


		console.log(this);
	}

	algunaVaina() {
		alert(
			`Hola, me llamo ${this.nombre}, y estoy un poquito aburrida, asi que ${this.apellido} me hizo esta chimbada de juego. Él es muy encantador y se que cuando nos veamos el domingo él y yo nos daremos ${this.edad} besos, y los ultimos 3 seran intensos JAJAJJAJAJJAJJA.`
		);
	}
}

const personaNueva = new Persona(
	this.nombre,
	this.apellido,
	this.edad,
	this.cedula,
);

personaNueva.registro();

alert('Ups, hubo un error, su belleza hizo que se callera la página, que pena molestarla. Pero en parte la culpa es suya debería estar en un museo, no por ahí colapsando páginas! cosaaaaa hermosaaaaa, le pedire que ingrese otra vez los datos...');

personaNueva['nombre'] = prompt('Ingrese su nombre otra vez..: ');
personaNueva['edad'] = prompt('Ingrese su edad :');
personaNueva.algunaVaina();

alert("¿Que tal le pareció?");
alert("Si le saque una sonrisa???")