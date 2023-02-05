
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
['27', 'capitulo 540'],
['19', 'capitulo 539'],
['20', 'capitulo 538'],
['28', 'capitulo 537'],
['26', 'capitulo 536'],
['28', 'capitulo 535'],
['22', 'capitulo 534'],
['24', 'capitulo 533'],
['27', 'capitulo 532'],
['27', 'capitulo 531'],
['32', 'capitulo 530'],
['26', 'capitulo 529'],
['33', 'capitulo 528'],
['23', 'capitulo 527'],
['25', 'capitulo 526'],
['21', 'capitulo 525'],
['24', 'capitulo 524'],
['23', 'capitulo 523'],
['24', 'capitulo 522'],
['28', 'capitulo 521'],
['24', 'capitulo 520'],
['26', 'capitulo 519'],
['25', 'capitulo 518'],
['24', 'capitulo 517'],
['21', 'capitulo 516'],
['28', 'capitulo 515'],
['28', 'capitulo 514'],
['31', 'capitulo 513'],
['26', 'capitulo 512'],
['31', 'capitulo 511'],
['27', 'capitulo 510'],
['28', 'capitulo 509'],
['30', 'capitulo 508'],
['23', 'capitulo 507'],
['25', 'capitulo 506'],
['20', 'capitulo 505'],
['22', 'capitulo 504'],
['28', 'capitulo 503'],
['22', 'capitulo 502'],
['29', 'capitulo 501'],
['28', 'capitulo 500'],
['29', 'capitulo 499'],
['29', 'capitulo 498'],
['30', 'capitulo 497'],
['28', 'capitulo 496'],
['27', 'capitulo 495'],
['25', 'capitulo 494'],
['30', 'capitulo 493'],
['31', 'capitulo 492'],
['20', 'capitulo 491'],
['25', 'capitulo 490'],
['21', 'capitulo 489'],
['25', 'capitulo 488'],
['21', 'capitulo 487'],
['31', 'capitulo 486'],
['27', 'capitulo 485'],
['27', 'capitulo 484'],
['28', 'capitulo 483'],
['24', 'capitulo 482'],
['24', 'capitulo 481'],
['22', 'capitulo 480'],
['32', 'capitulo 479'],
['30', 'capitulo 478'],
['18', 'capitulo 477'],
['26', 'capitulo 476'],
['21', 'capitulo 475'],
['25', 'capitulo 474'],
['24', 'capitulo 473'],
['24', 'capitulo 472'],
['20', 'capitulo 471'],
['30', 'capitulo 470'],
['20', 'capitulo 469'],
['22', 'capitulo 468'],
['29', 'capitulo 467'],
['27', 'capitulo 466'],
['24', 'capitulo 465'],
['27', 'capitulo 464'],
['22', 'capitulo 463'],
['35', 'capitulo 462'],
['24', 'capitulo 461'],
['23', 'capitulo 460'],
['28', 'capitulo 459'],
['19', 'capitulo 458'],
['22', 'capitulo 457'],
['19', 'capitulo 456'],
['24', 'capitulo 455'],
['22', 'capitulo 454'],
['17', 'capitulo 453'],
['24', 'capitulo 452'],
['22', 'capitulo 451'],
['24', 'capitulo 450'],
['26', 'capitulo 449'],
['17', 'capitulo 448'],
['27', 'capitulo 447'],
['19', 'capitulo 446'],
['27', 'capitulo 445'],
['28', 'capitulo 444'],
['21', 'capitulo 443'],
['22', 'capitulo 442'],
['26', 'capitulo 441'],
['30', 'capitulo 440'],
['34', 'capitulo 439'],
['27', 'capitulo 438'],
['34', 'capitulo 437'],
['32', 'capitulo 436'],
['24', 'capitulo 435'],
['25', 'capitulo 434'],
['26', 'capitulo 433'],
['27', 'capitulo 432'],
['27', 'capitulo 431'],
['24', 'capitulo 430'],
['28', 'capitulo 429'],
['21', 'capitulo 428'],
['32', 'capitulo 427'],
['27', 'capitulo 426'],
['26', 'capitulo 425'],
['26', 'capitulo 424'],
['27', 'capitulo 423'],
['29', 'capitulo 422'],
['24', 'capitulo 421'],
['31', 'capitulo 420'],
['30', 'capitulo 419'],
['26', 'capitulo 418'],
['24', 'capitulo 417'],
['26', 'capitulo 416'],
['29', 'capitulo 415'],
['31', 'capitulo 414'],
['29', 'capitulo 413'],
['31', 'capitulo 412'],
['30', 'capitulo 411'],
['31', 'capitulo 410'],
['25', 'capitulo 409'],
['30', 'capitulo 408'],
['26', 'capitulo 407'],
['27', 'capitulo 406'],
['27', 'capitulo 405'],
['26', 'capitulo 404'],
['25', 'capitulo 403'],
['28', 'capitulo 402'],
['32', 'capitulo 401'],
['27', 'capitulo 400'],
['29', 'capitulo 399'],
['30', 'capitulo 398'],
['29', 'capitulo 397'],
['31', 'capitulo 396'],
['24', 'capitulo 395'],
['26', 'capitulo 394'],
['29', 'capitulo 393'],
['29', 'capitulo 392'], 
['41', 'capitulo 391'], 
['31', 'capitulo 390'],  
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


window.onscroll= function(e){
    

    if((window.innerHeight+window.pageYOffset) >= document.body.offsetHeight){
        
        pagCargas=contador+2;
        
        while(contador<=paginasT && contador <= pagCargas && disponible ){
            const imagen=document.createElement('img');
            imagen.src='./img/immortal/'+capitulo+'/'+contador+'.jpg';
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
        imagen.src='./img/immortal/'+numero+'/'+contador+'.jpg';
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