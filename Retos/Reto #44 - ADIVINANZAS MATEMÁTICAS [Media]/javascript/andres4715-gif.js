/*
 * Crea un juego interactivo por terminal en el que tendrás que adivinar
 * el resultado de diferentes
 * operaciones matemáticas aleatorias (suma, resta, multiplicación
 * o división de dos números enteros).
 * - Tendrás 3 segundos para responder correctamente.
 * - El juego finaliza si no se logra responder en ese tiempo.
 * - Al finalizar el juego debes mostrar cuántos cálculos has acertado.
 * - Cada 5 aciertos debes aumentar en uno el posible número de cifras
 *   de la operación (cada vez en un operando):
 *   - Preguntas 1 a 5: X (entre 0 y 9) operación Y (entre 0 y 9)
 *   - Preguntas 6 a 10: XX (entre 0 y 99) operación Y (entre 0 y 9)
 *   - Preguntas 11 a 15: XX operación YY
 *   - Preguntas 16 a 20: XXX (entre 0 y 999) operación YY
 *   ...
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('🚀 ¿Estas listo? ', (respuestaListo) => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const arraySigno = ['+', '-', '*', '/'];
  const signo = Math.floor(Math.random() * arraySigno.length);
  const operacion = arraySigno[signo];

  rl.question(
    `¿Cual es el resultado de al operación: ${num1} ${operacion} ${num2} = `,
    (respuesta) => {
      const suma = () => {
        console.log('🚀🚀🚀 La respuesta fue: ', respuesta);
        const finalSuma = num1 + num2;
        console.log(`La suma entre: ${num1} y ${num2} es: ${finalSuma}`);
        if (Number(respuesta) === finalSuma) {
          console.log('✅✅✅ - La respuesta es correcta');
        } else {
          console.log('❌❌❌ - La respuesta es incorrecta');
        }
      };

      const resta = () => {
        console.log('🚀🚀🚀 La respuesta fue: ', respuesta);
        const finalResta = num1 - num2;
        console.log(`La resta entre: ${num1} y ${num2} es: ${finalResta}`);
        if (Number(respuesta) === finalResta) {
          console.log('✅✅✅ - La respuesta es correcta');
        } else {
          console.log('❌❌❌ - La respuesta es incorrecta');
        }
      };

      const multiplicacion = () => {
        console.log('🚀🚀🚀 La respuesta fue: ', respuesta);
        const finalMultiplicacion = num1 * num2;
        console.log(
          `La multiplicacion entre: ${num1} y ${num2} es: ${finalMultiplicacion}`
        );
        if (Number(respuesta) === finalMultiplicacion) {
          console.log('✅✅✅ - La respuesta es correcta');
        } else {
          console.log('❌❌❌ - La respuesta es incorrecta');
        }
      };

      const division = () => {
        console.log('🚀🚀🚀 La respuesta fue: ', respuesta);
        const finalDivision = Math.floor(num1 / num2);
        console.log(
          `La division entre: ${num1} y ${num2} es: ${Math.floor(
            finalDivision
          )}`
        );
        if (Number(Math.floor(respuesta)) === finalDivision) {
          console.log('✅✅✅ - La respuesta es correcta');
        } else {
          console.log('❌❌❌ - La respuesta es incorrecta');
        }
      };

      switch (operacion) {
        case '+':
          suma();
          break;
        case '-':
          resta();
          break;
        case '*':
          multiplicacion();
          break;
        case '/':
          division();
          break;
        default:
          console.log('❌ Operación no valida ❌');
      }
      rl.close();
      console.log(`Tu respuesta fue que estabas ${respuestaListo}`);
      console.log(`FIN`);
    }
  );
});
