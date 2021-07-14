
const lista = document.getElementById('lista');


var arr = [
['GreatImmortal/cap-316.html', 'capitulo 316'],
['GreatImmortal/cap-317.html', 'capitulo 317'],
['GreatImmortal/cap-318.html', 'capitulo 318'],
['GreatImmortal/cap-319.html', 'capitulo 319'],
['GreatImmortal/cap-320.html', 'capitulo 320'],
['GreatImmortal/cap-321.html', 'capitulo 321'],
['GreatImmortal/cap-322.html', 'capitulo 322'],
['GreatImmortal/cap-323.html', 'capitulo 323'],
['GreatImmortal/cap-324.html', 'capitulo 324'],
['GreatImmortal/cap-325.html', 'capitulo 325'],
['GreatImmortal/cap-326.html', 'capitulo 326'],
['GreatImmortal/cap-327.html', 'capitulo 327'],
['GreatImmortal/cap-328.html', 'capitulo 328'],
['GreatImmortal/cap-329.html', 'capitulo 329'],
['GreatImmortal/cap-330.html', 'capitulo 330'],
['GreatImmortal/cap-331.html', 'capitulo 331'],
['GreatImmortal/cap-332.html', 'capitulo 332'],
['GreatImmortal/cap-333.html', 'capitulo 333'],
['GreatImmortal/cap-334.html', 'capitulo 334'],
['GreatImmortal/cap-335.html', 'capitulo 335']];





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