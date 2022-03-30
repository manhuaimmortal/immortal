
const contenedor= document.querySelector(".conteiner");
const inicio=document.querySelector(".img-manhua");


const imagenes=document.querySelector(".imagenes");
const contBotones=document.querySelector(".botones");
imagenes.classList.add("contenedor")

let capitulo=0
var contador=0;
var paginasT=0; //paginas totales
var pagCargas=0
var disponible=false;
var arr = [
['73', 'capitulo 54'],
['89', 'capitulo 53'],
['30', 'capitulo 52'],
['68', 'capitulo 51'],
['42', 'capitulo 50'],
['47', 'capitulo 49'],
['48', 'capitulo 48'],
['34', 'capitulo 47'],
['35', 'capitulo 46'],
['62', 'capitulo 45'],
['37', 'capitulo 44']
];

window.onscroll= function(e){
    

    if((window.innerHeight+window.pageYOffset) >= document.body.offsetHeight){
        
        pagCargas=contador+2;
        
        while(contador<=paginasT && contador <= pagCargas && disponible ){
            const imagen=document.createElement('img');
            imagen.src='./img/anUrban/'+capitulo+'/'+contador+'.jpg';
            imagen.classList.add('paginas');
            imagenes.appendChild(imagen);
            
            
            contador++;
        }
        
    }
}


arr.forEach(element => {
  
   crearBotones(element[1]);
})


function crearBotones(btn){
    const boton= document.createElement("BUTTON");
    boton.innerHTML=btn;
    boton.classList.add("item")
    boton.classList.add("btn-link");
    contenedor.appendChild(boton);

    const espacio=document.createElement("BR");
    contenedor.appendChild(espacio);

    boton.addEventListener("click",(e)=>{
        let texto=e.target.firstChild.nodeValue;
        let cadena=texto.split(" ")
        
        
        
        padre = contenedor.parentNode;
        padre.removeChild(contenedor);
        padre = inicio.parentNode;
        padre.removeChild(inicio);
        let canPagina;
        arr.forEach(e=>{
            if(e[1].indexOf(cadena[1])>-1){
                
                canPagina=e[0];
              
            }
            
        });   
        capitulo=cadena[1];

        paginasT=canPagina;
        
        disponible=true;
        cargarImagenes(capitulo,canPagina);

        
        
            
        
    });
}

function cargarImagenes(num,pag){
    
    capitulo=num.toString();
    let capAtras= parseInt(capitulo,10)-1;
    let capAdelante= parseInt(capitulo,10)+1;
    let pagAtras=0;
    let pagAdelante=0;
    

    arr.forEach(e=>{
            if(e[1].indexOf(capAtras)>-1){
                
                pagAtras=e[0];
              
            }
            if(e[1].indexOf(capAdelante)>-1){
                
                pagAdelante=e[0];
              
            }
            
        });   

        
     botonDer(capAtras,pagAtras,capAdelante,pagAdelante);



    
    
    let numero=String(num);
    capitulo=numero;
    while(contador<=0){
        
        const imagen=document.createElement('img');
        imagen.src='./img/anUrban/'+numero+'/'+contador+'.jpg';
        imagen.classList.add('paginas');
        imagenes.appendChild(imagen);

      
        contador++;
    }
}


function botonDer(atras,pAtras, adelante,pAdelante){
    
    const contenedorBotones=document.querySelector('.botones');
    const contenedorBotones2=document.querySelector('.botones2');
    while (contenedorBotones.firstChild){
        contenedorBotones.removeChild(contenedorBotones.firstChild);
      };

      while (contenedorBotones2.firstChild){
        contenedorBotones2.removeChild(contenedorBotones2.firstChild);
      };  

    if(pAtras!=0){
        const boton2= document.createElement("BUTTON");
        boton2.innerHTML="<"+atras;
        boton2.classList.add("btn-link");
        contenedorBotones.appendChild(boton2);
        boton2.addEventListener("click", (e)=>{
            const pag=document.querySelectorAll(".paginas");
            
            for(ele of pag){
                padre = ele.parentElement;
                padre.removeChild(ele);
                
            }

             capitulo=0;
             contador=0;
             paginasT=pAtras;
             pagCargas=0;
            cargarImagenes(atras,pAtras);
            
        })        
    }    


    if(pAtras!=0){
        const boton3= document.createElement("BUTTON");
        boton3.innerHTML="<"+atras;
        boton3.classList.add("btn-link");
        contenedorBotones2.appendChild(boton3);
        boton3.addEventListener("click", (e)=>{
            const pag=document.querySelectorAll(".paginas");
            
            for(ele of pag){
                padre = ele.parentElement;
                padre.removeChild(ele);
                
            }

             capitulo=0;
             contador=0;
             paginasT=pAtras;
             pagCargas=0;
            cargarImagenes(atras,pAtras);
        })        
    }



    if(pAdelante!=0){
        const boton1= document.createElement("BUTTON");
        boton1.classList.add("btn-link");
        boton1.innerHTML=adelante+">";
        contenedorBotones.appendChild(boton1);
        boton1.addEventListener("click", (e)=>{
            const pag=document.querySelectorAll(".paginas");
            
            for(ele of pag){
                padre = ele.parentElement;
                padre.removeChild(ele);
                
            }

             capitulo=0;
             contador=0;
             paginasT=pAdelante;
             pagCargas=0;
            cargarImagenes(adelante,pAdelante);
        })
    }
    if(pAdelante!=0){
        const boton4= document.createElement("BUTTON");
        boton4.classList.add("btn-link");
        boton4.innerHTML=adelante+">";
        contenedorBotones2.appendChild(boton4);
        boton4.addEventListener("click", (e)=>{
            const pag=document.querySelectorAll(".paginas");
            
            for(ele of pag){
                padre = ele.parentElement;
                padre.removeChild(ele);
                
            }

            capitulo=0;
             contador=0;
             paginasT=pAdelante;
             pagCargas=0;
            cargarImagenes(adelante,pAdelante);
        })
    }
    
    //interval();
   
}