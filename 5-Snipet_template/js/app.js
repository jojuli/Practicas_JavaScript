
var lista = document.querySelector('#listaDinamica'),
template = document.querySelector('#litemplate');
var pais=['Guatemala','Salvador','Honduras','Nicaragua'];
var framgment = new DocumentFragment();


pais.forEach((paises) =>{
    var clone = template.content.cloneNode(true);
    clone.querySelector('span').textContent = paises;
    framgment.appendChild(clone);
});

lista.appendChild(framgment);