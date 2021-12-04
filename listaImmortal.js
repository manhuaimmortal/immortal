const contenedor= document.querySelector(".conteiner");
const inicio=document.querySelector(".img-manhua");

const imagenes=document.querySelector(".imagenes");
const contBotones=document.querySelector(".botones");
imagenes.classList.add("contenedor")

let capitulo=0
var arr = [
['31', 'capitulo 389'],  
['26', 'capitulo 388'],    
['26', 'capitulo 387'], 
['27', 'capitulo 386'], 
['29', 'capitulo 385'], 
['30', 'capitulo 384'], 
['27', 'capitulo 383'], 
['30', 'capitulo 382'], 
['31', 'capitulo 381'], 
['34', 'capitulo 380'], 
['28', 'capitulo 379'], 
['33', 'capitulo 378'], 
['29', 'capitulo 377'], 
['31', 'capitulo 376'], 
['30', 'capitulo 375'], 
['29', 'capitulo 374'], 
['32', 'capitulo 373'],     
['29', 'capitulo 372'], 
['36', 'capitulo 371'], 
['38', 'capitulo 370'],      
['31', 'capitulo 369'],       
['31', 'capitulo 368'],    
['30', 'capitulo 367'],       
['29', 'capitulo 366'],       
['36', 'capitulo 365'],       
['32', 'capitulo 364'],      
['33', 'capitulo 363'],      
['32', 'capitulo 362'],     
['31', 'capitulo 361'],    
['33', 'capitulo 360'],
['29', 'capitulo 359'],    
['32', 'capitulo 358'],   
['30', 'capitulo 357'], 
['27', 'capitulo 356'], 
['33', 'capitulo 355'], 
['31', 'capitulo 354'], 
['32', 'capitulo 353'],  
['28', 'capitulo 352'],   
['24', 'capitulo 351'],
['31', 'capitulo 350'],
['28', 'capitulo 349'],
['30', 'capitulo 348'],    
['28', 'capitulo 347'],  
['27', 'capitulo 346'],    
['29', 'capitulo 345'],
['30', 'capitulo 344'],
['29', 'capitulo 343'],    
['28', 'capitulo 342'],  
['29', 'capitulo 341'],    
['31', 'capitulo 340'],
['32', 'capitulo 339'],
['32', 'capitulo 338'],
['32', 'capitulo 337'],
['30', 'capitulo 336'],
['32', 'capitulo 335'],
['24', 'capitulo 334'],
['29', 'capitulo 333'],
['24', 'capitulo 332'],
['30', 'capitulo 331'],
['26', 'capitulo 330'],
['29', 'capitulo 329'],
['28', 'capitulo 328'],
['27', 'capitulo 327'],
['34', 'capitulo 326'],
['30', 'capitulo 325'],
['30', 'capitulo 324'],
['28', 'capitulo 323'],
['26', 'capitulo 322'],
['31', 'capitulo 321'],
['29', 'capitulo 320'],
['27', 'capitulo 319'],
['32', 'capitulo 318'],
['31', 'capitulo 317'],
['29', 'capitulo 316'],
['27', 'capitulo 315'],
['28', 'capitulo 314'],
['26', 'capitulo 313'],
['30', 'capitulo 312']];





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



    
    let contador=0;
    let numero=String(num);
    
    while(contador<=pag){
        const imagen=document.createElement('img');
        imagen.src='./img/'+numero+'/'+contador+'.jpg';
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

        
            cargarImagenes(adelante,pAdelante);
        })
    }
    
    //interval();
   
}