let ultimo=337;




var titulo= document.title;
    console.log(titulo);
    var numTitulo=titulo.split("-");

    numero= parseInt(numTitulo[1],10);

    var mas=numero+1;
    var menos=numero-1;

    


const contenedor=document.getElementById('contenedor');


 let pag=window.paginas;
var contador=0;



agregaBotones()
while(contador<=pag){
    const imagen=document.createElement('img');
    imagen.src='../img/'+numero+'/'+contador+'.jpg';
    imagen.classList.add('paginas');
    contenedor.appendChild(imagen);
    contador++;
}

function agregaBotones(){
    const contenedorBotones=document.querySelector('.botones');
    if(numero==316){
        var ir='../index.html'
        var textobtn='caps'
    }else{
        var ir='cap-'+menos+'.html'
        var textobtn='<'+menos
        const atras= document.createElement('a');
    atras.href=ir;
    atras.textContent=textobtn;
    atras.classList.add('btn-link');
    contenedorBotones.appendChild(atras);
    contenedor.appendChild(contenedorBotones);
    }
    
    




    const menu= document.createElement('a');
    menu.href='../index.html';
    menu.textContent='caps';
    menu.classList.add('btn-link');
    contenedorBotones.appendChild(menu);
    contenedor.appendChild(contenedorBotones);



    if(numero==ultimo){
        
    }else{
        var ir='cap-'+mas+'.html'
        var textobtn=mas+'>'
        const adelante= document.createElement('a');
        adelante.href=ir;
        adelante.textContent=textobtn;
        adelante.classList.add('btn-link');
        contenedorBotones.appendChild(adelante);
        contenedor.appendChild(contenedorBotones);
    }

   
}


agregaBotones();