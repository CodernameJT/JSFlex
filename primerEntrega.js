// Global array of numbers
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Main game function
(function() {
  /*
  Explicación del juego:
  Este es un juego de adivinanza de números. El juego seleccionará un número al azar entre 1 y 10.
  Tienes tres intentos para adivinar el número. Si adivinas correctamente, ganas 10 puntos.
  El juego consta de tres rondas. Al final del juego, se mostrará tu puntuación total.
  Si ingresas un número que no está entre 1 y 10, recibirás una advertencia y no contará como un intento.
  ¡Disfruta el juego!
  */

  let puntos = 0;
  let rondas = 3;

  console.log('¡Bienvenido al juego de adivinar el número!');

  for(let i = 0; i < rondas; i++) {
    let numeroSecreto = numeros[Math.floor(Math.random() * numeros.length)];
    let intento = '';
    let intentos = 0;

    while (intento !== numeroSecreto && intentos < 3) {
      intento = prompt('Ingresa tu número: ');

      if (intento === null) {
        console.log('Gracias por haber jugado con nosotros');
        return;
      }

      if (intento <= 0 || intento > 10) {
        console.log('Número inválido. Ingresa un número entre 1 y 10.');
        continue;
      }

      if (intento == numeroSecreto) {
        console.log('¡Felicidades! Adivinaste el número.');
        puntos += 10;
      } else {
        intentos++;
        console.log('Intento incorrecto. Intenta de nuevo. Te quedan ' + (3 - intentos) + ' intentos.');
      }
    }

    if (intentos === 3) {
      console.log('Lo siento, no adivinaste el número. El número secreto era ' + numeroSecreto + '.');
    }
  }

  console.log('El juego ha terminado. Tu puntuación final es: ' + puntos);
})();
