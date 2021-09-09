
const lista = document.getElementById('lista');


var arr = [
['GreatImmortal/cap-359.html', 'capitulo 359'],     
['GreatImmortal/cap-358.html', 'capitulo 358'], 
['GreatImmortal/cap-357.html', 'capitulo 357'], 
['GreatImmortal/cap-356.html', 'capitulo 356'], 
['GreatImmortal/cap-355.html', 'capitulo 355'], 
['GreatImmortal/cap-354.html', 'capitulo 354'], 
['GreatImmortal/cap-353.html', 'capitulo 353'],  
['GreatImmortal/cap-352.html', 'capitulo 352'],   
['GreatImmortal/cap-351.html', 'capitulo 351'],
['GreatImmortal/cap-350.html', 'capitulo 350'],
['GreatImmortal/cap-349.html', 'capitulo 349'],
['GreatImmortal/cap-348.html', 'capitulo 348'],    
['GreatImmortal/cap-347.html', 'capitulo 347'],  
['GreatImmortal/cap-346.html', 'capitulo 346'],    
['GreatImmortal/cap-345.html', 'capitulo 345'],
['GreatImmortal/cap-344.html', 'capitulo 344'],
['GreatImmortal/cap-343.html', 'capitulo 343'],    
['GreatImmortal/cap-342.html', 'capitulo 342'],  
['GreatImmortal/cap-341.html', 'capitulo 341'],    
['GreatImmortal/cap-340.html', 'capitulo 340'],
['GreatImmortal/cap-339.html', 'capitulo 339'],
['GreatImmortal/cap-338.html', 'capitulo 338'],
['GreatImmortal/cap-337.html', 'capitulo 337'],
['GreatImmortal/cap-336.html', 'capitulo 336'],
['GreatImmortal/cap-335.html', 'capitulo 335'],
['GreatImmortal/cap-334.html', 'capitulo 334'],
['GreatImmortal/cap-333.html', 'capitulo 333'],
['GreatImmortal/cap-332.html', 'capitulo 332'],
['GreatImmortal/cap-331.html', 'capitulo 331'],
['GreatImmortal/cap-330.html', 'capitulo 330'],
['GreatImmortal/cap-329.html', 'capitulo 329'],
['GreatImmortal/cap-328.html', 'capitulo 328'],
['GreatImmortal/cap-327.html', 'capitulo 327'],
['GreatImmortal/cap-326.html', 'capitulo 326'],
['GreatImmortal/cap-325.html', 'capitulo 325'],
['GreatImmortal/cap-324.html', 'capitulo 324'],
['GreatImmortal/cap-323.html', 'capitulo 323'],
['GreatImmortal/cap-322.html', 'capitulo 322'],
['GreatImmortal/cap-321.html', 'capitulo 321'],
['GreatImmortal/cap-320.html', 'capitulo 320'],
['GreatImmortal/cap-319.html', 'capitulo 319'],
['GreatImmortal/cap-318.html', 'capitulo 318'],
['GreatImmortal/cap-317.html', 'capitulo 317'],
['GreatImmortal/cap-316.html', 'capitulo 316']];





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