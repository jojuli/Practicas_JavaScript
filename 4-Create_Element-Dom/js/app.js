const lista = document.getElementById("lista"),

elementos = ['Guatemala','Salvador','Honduras'],
fragment = new DocumentFragment();

elementos.forEach((element)=>{
const li = document.createElement('li');
li.className='list';

const b = document.createElement('b');
b.innerText = 'Pais: ';

var span = document.createElement('span');
span.className='text-primary';
span.textContent = element;

//agregar los nodos al elemento li
li.appendChild(b);
li.appendChild(span);
fragment.appendChild(li);

});

lista.appendChild(fragment);