let palabrita;
let cant_errores = 0;//cuantas veces me equivoque 
let cant_aciertos = 0;//cuantas letras acerte 

const palabras = [
    "manzanas","camiseta","caramelos","ñoquis","streamer","twitch","murcielago","microfono"
];

const btn = document.getElementById("jugar");
btn.addEventListener("click",iniciar);


function iniciar(event){
    imagen.src = 'img/img0.png';
    btn.disabled =true;
     cant_errores = 0;
     cant_aciertos = 0
    const parrafo = id('palabra-adivinar');
    parrafo.innerHTML = '';

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);

    palabrita = palabras[valor_al_azar];
    console.log(palabrita);
    const cant_letras = palabrita.length;
    for (let i=0; i< btn_letras.length;i++){
        btn_letras[i].disabled = false;
   }
     
    
    for( let i = 0; i < cant_letras; i++){
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }

    
}
const btn_letras = document.querySelectorAll('#letras button')
for (let i=0; i< btn_letras.length;i++){
    btn_letras[i].addEventListener('click', click_letras);
}
function click_letras(event){
    const spans = document.querySelectorAll(' span');
    const button = event.target; // cual de todas las letras llamo a la funcion 
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase();
    const palabra = palabrita.toLowerCase();// .toUpperCase()

    let acerto = false;
    for(let i = 0; i < palabra.length;i++){
        if(letra == palabra[i]){
            //la variable i es la posicion de la letra en la palabra.
            //que coincide con el span al que tenemos que mostrarle la letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if(acerto == false){
        cant_errores++;
            const source = `img/img${cant_errores}.png`;
            const imagen = id('imagen');
            imagen.src = source;
    }

    if(cant_errores == 6){
        id('resultado').innerHTML = "perdiste, la palabra era " + palabrita;
        game_over();
    }
    else if(cant_aciertos == palabrita.length){
        id('resultado').innerHTML = 'GANASTE!!';
        game_over();

    }

    console.log('la letra ' + letra + ' en la palabra '+ palabra + ' ¿existe?:' + acerto);
}

   function game_over(){
    for (let i=0; i< btn_letras.length;i++){
        btn_letras[i].disabled = true;
   }

   btn.disabled = false;

}


game_over();