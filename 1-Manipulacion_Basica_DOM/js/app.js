/**selecciona con querySelector('');un selector de forma individual */
const h1 =document.querySelector('h1');/**Selecciona una etiqueta */
const h2 =document.querySelector('h2');/**Selecciona una etiqueta */
const p = document.querySelector('p');/**Seleccio de parrafos */
const parrafito = document.querySelector('.parrafito');/**Seleccion de nombre de clase */
const pid = document.querySelector('#pid');/*seleccion de id*/
const input = document.querySelector('input');/** seleccion de inputs */


console.log('Imprimiendo el valor del input: '+input.value);

console.log({
h1,
p,
parrafito,
pid,
input
});

/**Cambiar contenido de un selector */
/**innerText lo interpreta todo como texto */
h1.innerHTML="Cambiando Texto de Titulo html con innerhtml"; /**innerHtml se puede modifiar el html */

/**Modificando un atributo */
h2.getAttribute('pp','rojo');/**modificar atributo */

/**Agregar otra clase */
h2.classList.add('rojo');
/**eliminando atributo de clase */
h1.classList.remove('pp');

/**otras propiedades toogle,contains */

/**Crear elementos 
 * 
 * document.createElement('');
 * 
*/

