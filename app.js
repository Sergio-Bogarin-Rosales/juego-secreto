/*
textContent: La propiedad textContent en JavaScript se refiere al contenido de texto puro de un elemento HTML. 
Esto significa que solo obtendrá o establecerá el texto sin etiquetas HTML ni ningún formato adicional. 
Por ejemplo, si tienes un elemento de párrafo <p> con el siguiente código HTML:

    <p id="miParrafo">Esto es un párrafo <strong>con texto en negrita</strong> y <em>texto en cursiva</em></p>

Y quieres acceder al contenido de texto del párrafo usando textContent en JavaScript, el resultado sería:

    const miParrafo = document.getElementById('miParrafo');
    console.log(miParrafo.textContent);

Salida: "Esto es un párrafo con texto en negrita y texto en cursiva"

Como puedes ver, textContent devuelve el contenido de texto completo dentro del elemento, incluyendo cualquier etiqueta HTML.

innerText: La propiedad innerText en JavaScript también se refiere al contenido de texto de un elemento HTML, pero con algunas diferencias importantes en comparación con textContent. 
innerText tiene en cuenta la visualización del elemento en la página y aplica estilos CSS, lo que significa que solo obtendrás el texto visible para el usuario. 
Por ejemplo, si tienes un elemento de párrafo <p> con el siguiente código HTML:

    <p id="miParrafo">Esto es un párrafo <strong style="display:none;">oculto</strong> y <em>texto en cursiva</em></p>

Y quieres acceder al contenido de texto del párrafo usando innerText en JavaScript, el resultado sería:

    const miParrafo = document.getElementById('miParrafo');
    console.log(miParrafo.innerText);

Salida: "Esto es un párrafo y texto en cursiva"

Como puedes ver, innerText no incluye el texto oculto por estilos CSS, como el texto dentro del elemento <strong> con el estilo “display:none;” en este caso.

innerHTML: La propiedad innerHTML en JavaScript se refiere al contenido HTML completo de un elemento, incluyendo tanto el texto como las etiquetas HTML dentro del elemento.
Por ejemplo, si tienes el mismo elemento de párrafo <p> del ejemplo anterior y quieres acceder a su contenido HTML usando innerHTML en JavaScript, el resultado sería:

    const miParrafo = document.getElementById('miParrafo');
    console.log(miParrafo.innerHTML);

Salida: "Esto es un párrafo <strong style="display:none;">oculto</strong> y <em>texto en cursiva</em>"

Como puedes ver, innerHTML devuelve todo el contenido HTML del elemento.
*/

// funciones

function asignarTextoElemento(elementoSelecionado, texto)
{
    let elemento = document.querySelector(elementoSelecionado);
    elemento.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;

    //test
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMax)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }
    else{
        // checa si el numero generado se encuentra en la lista
        if (listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById('idValorUsuario').value);

    if(numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');  // Reavilita el boton de reinicio por medio de quitar el atributo disabled.
    }
    else{
        if(numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
}

function limpiarCaja()
{
    /*
    let valorCaja = document.querySelector('#idValorUsuario');  // se utiliza el # para estabecer que se esta buscando por ID
    valorCaja.value = '';
    */
    document.querySelector('#idValorUsuario').value = '';  // se utiliza el # para estabecer que se esta buscando por ID
}

function reiniciarJuego()
{
    // limpiar la caja
    limpiarCaja();
    // indicar intervalos de numeros
    condicionesIniciales();
    // deabilitar el boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales()
{
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMax}`);
    // generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    // inicialisar intentos
    intentos = 1;
}

function chequeoDeTotalNumeros()
{
    return 0;
}


/*
let titulo = document.querySelector('h1');  //  Acceder mediante la etiqueta.
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/


// Cuerpo del programa
let numeroSecreto = 0;
let intentos = 0;
let numeroMax = 10;
let listaNumerosSorteados = [];

condicionesIniciales();



/*
            TIPS DE VISUAL STUDIO CODE

            - CTL + F : habre un buscador para checar si hay sierta palabra en el codigo y mostrara las compatibilidades
*/
