
const lista = document.getElementById('lista');


var arr = [
['an-urban-cultivation-frenzy/cap-49.html', 'capitulo 49'], 
['an-urban-cultivation-frenzy/cap-48.html', 'capitulo 48'],     
['an-urban-cultivation-frenzy/cap-47.html', 'capitulo 47'],    
['an-urban-cultivation-frenzy/cap-46.html', 'capitulo 46'],
['an-urban-cultivation-frenzy/cap-45.html', 'capitulo 45'],
['an-urban-cultivation-frenzy/cap-44.html', 'capitulo 44']
];





arr.forEach(element => {
    creaLink(element[0], element[1]);
})

function creaLink(href, texto) {
    const lin = document.createElement('a');
    lin.classList.add('cap-link');
    lin.href = href;
    lin.textContent = texto;

    creaElementos(lin);
}

function creaElementos(ite) {
    let elem = document.createElement('li');
    elem.classList.add('item');
    elem.appendChild(ite);
    lista.appendChild(elem);
}