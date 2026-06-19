let abiertos = 0;
let regalo1 = false;
let regalo2 = false;
let regalo3 = false;
let monacoCompletado = false;
let japonCompletado = false;
let pokebolaCorrecta = 0;
let pokebolasEncontradas = [];


function abrirRegalo(numero){

    const contenido =
        document.getElementById("contenido");

    document.getElementById("pantallaPrincipal")
        .style.display = "none";

if(numero === 1){

    if(!regalo1){

        regalo1 = true;
        abiertos++;
    }

    mostrarPokemon();
}

    if(numero === 2){

        if(!regalo2){

            regalo2 = true;
            abiertos++;
        }

        contenido.innerHTML = `

            <h1>🎵 Canciones que me recuerdan a ti 🎵</h1>

            <div class="contenedor-canciones">

                <div class="tarjeta-cancion">

                    <img src="imagenes/see_you_again.png"
                         alt="See You Again">

                    <h2>See You Again</h2>

                    <audio controls>
                        <source
                            src="musica/see_you_again.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>

                <div class="tarjeta-cancion">

                    <img src="imagenes/contigo.png"
                         alt="Contigo">

                    <h2>Contigo</h2>

                    <audio controls>
                        <source
                            src="musica/contigo.m4A"
                            type="audio/mpeg">
                    </audio>

                </div>

                <div class="tarjeta-cancion">

                    <img src="imagenes/eres.png"
                         alt="Eres">

                    <h2>Eres</h2>

                    <audio controls>
                        <source
                            src="musica/eres.m4A"
                            type="audio/mpeg">
                    </audio>

                </div>

            </div>

            <button class="regalo"
                    onclick="volver()">
                Volver
            </button>

        `;
    }

    if(numero === 3){

    if(!regalo3){

        regalo3 = true;
        abiertos++;
    }

    mostrarDestinos();
}

    if(abiertos === 3){

        const botonFinal =
            document.getElementById("final");

        botonFinal.disabled = false;

        botonFinal.innerHTML =
            "💌 Regalo Final";
    }

if(numero === 4){

    regaloFinal();
}
}

function volver(){

    document.getElementById("contenido")
        .innerHTML = "";

    document.getElementById("pantallaPrincipal")
        .style.display = "block";
}

function mostrarPokemon(){

    const contenido =
        document.getElementById("contenido");

    pokebolaCorrecta =
        Math.floor(Math.random() * 10);

    pokebolasEncontradas = [];

    let pokebolasHTML = "";

const posiciones = [

    "top:250px; left:10%;",
    "top:380px; left:25%;",
    "top:280px; left:45%;",
    "top:450px; left:65%;",
    "top:300px; left:80%;",

    "top:550px; left:15%;",
    "top:650px; left:35%;",
    "top:580px; left:55%;",
    "top:750px; left:75%;",
    "top:480px; left:90%;"

];

    for(let i = 0; i < 10; i++){

        pokebolasHTML += `

            <img
                src="imagenes/pokebola.png"
                class="pokebola"
                style="${posiciones[i]}"
                onclick="seleccionarPokebola(${i})">

        `;
    }

    contenido.innerHTML = `

        <div class="pantalla-pokemon">

            <h1>
                ⚡ Un pequeño desafío Pokémon ⚡
            </h1>

            <p class="mensaje-pokemon">

                Entre todas estas Pokébolas
                hay una especial.

                <br><br>

                ¿Podrás encontrarla?

            </p>

            <p id="mensajeErrorPokemon"></p>

            ${pokebolasHTML}

        </div>

    `;
}

function seleccionarPokebola(numero){

    if(numero === pokebolaCorrecta){

        pokemonEncontrado();

        return;
    }

    const pokebolas =
        document.querySelectorAll(".pokebola");

    pokebolas[numero].style.display = "none";

    document.getElementById(
        "mensajeErrorPokemon"
    ).innerHTML =

        "❌ Esa Pokébola estaba vacía. Sigue buscando.";
}

function pokemonEncontrado(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <div class="premio-pokemon">

            <h1>✨ ¡Felicidades! ✨</h1>

            <p class="mensaje-pokemon">

                Encontraste la Pokébola correcta.

                <br><br>

                Parece que hay algo especial dentro.

                <br><br>

                Haz clic en la Pokébola para abrirla.

            </p>

            <img
                src="imagenes/pokebola.png"
                class="pokebola-premio"
                onclick="mostrarCartaPokemon()">

        </div>

    `;
}

function mostrarCartaPokemon(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <div class="carta-pokemon">

            <img
                src="imagenes/carta_pokemon.png"
                class="imagen-carta">

            <br><br>

            <button class="regalo"
                    onclick="volver()">

                Volver al menú principal

            </button>

        </div>

    `;
}

function mostrarDestinos(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>🎫 Destinos desbloqueados</h1>

        <div class="contenedor-destinos">

            <div class="ticket"
                 onclick="monaco1()">

                <h2>🏎️ Viaje 1</h2>

                <p>
    Mónaco
</p>

<img src="imagenes/f1.png"
     class="imagen-destino">

            </div>

            ${monacoCompletado ?

            `

            <div class="ticket"
                 onclick="japon1()">

                <h2>🐎 Viaje 2</h2>

<p>
    Japón
</p>

<img src="imagenes/torii.png"
     class="imagen-destino">

            </div>

            `

            :

            `

            <div class="ticket bloqueado">

                <h2>🔒 Viaje 2</h2>

                <p>
                    Completa el Viaje 1
                </p>

            </div>

            `}

            ${japonCompletado ?

            `

            <div class="ticket"
                 onclick="destino1()">

                <h2>💸 Viaje 3</h2>

 <p>
    Destino Secreto
</p>

<img src="imagenes/mapa.png"
     class="imagen-destino">
            </div>

            `

            :

            `

            <div class="ticket bloqueado">

                <h2>🔒 Viaje 3</h2>

                <p>
                    Completa el Viaje 2
                </p>

            </div>

            `}

        </div>

        <button class="regalo"
                onclick="volver()">
            Volver
        </button>

    `;
}

function finalizarMonaco(){

    monacoCompletado = true;

    mostrarDestinos();
}

function finalizarJapon(){

    japonCompletado = true;

    mostrarDestinos();
}

function monaco1(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>🏎️ Viaje a Mónaco</h1>

        <div class="progreso">
            ● ○ ○
        </div>

        <div class="postal">

            <h2>🏰 Monaco-Ville</h2>

            <img src="imagenes/monaco_ville.png">

            <div class="mensaje-viaje">

                Primera parada. 🏰

                <br><br>

                Antes de llegar a la carrera,
                pensé que podríamos pasear un poco.

            </div>

        </div>

        <button class="regalo"
                onclick="monaco2()">
            Continuar
        </button>

    `;
}

function monaco2(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>🏎️ Viaje a Mónaco</h1>

        <div class="progreso">
            ● ● ○
        </div>

        <div class="postal">

            <h2>⚓ Puerto Hércules</h2>

            <img src="imagenes/puerto_hercules.png">

            <div class="mensaje-viaje">

                Aquí están los famosos yates
                que aparecen en las carreras. ⚓

                <br><br>

                Nosotros vinimos con un presupuesto
                ligeramente diferente.

            </div>

        </div>

        <button class="regalo"
                onclick="monaco3()">
            Continuar
        </button>

    `;
}

function monaco3(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>🏎️ Viaje a Mónaco</h1>

        <div class="progreso">
            ● ● ●
        </div>

        <div class="postal">

            <h2>🏁 Gran Premio de Mónaco</h2>

            <img src="imagenes/gp_monaco.png">

<div class="mensaje-viaje">

    Finalmente llegamos. 🏁<br><br>

    Me dijiste una vez que tenía que llevarte a Mónaco.<br><br>

    Todavía no puedo hacerlo de verdad,
    pero quería empezar por algún lugar.

</div>

        </div>

<button class="regalo"
        onclick="finalizarMonaco()">
    Volver a los tickets
</button>

    `;
}

function japon1(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>🇯🇵 Viaje a Japón</h1>

        <div class="progreso">
            ● ○ ○
        </div>

        <div class="postal">

            <h2>🗼 Tokio</h2>

            <img src="imagenes/tokio.png">

            <div class="mensaje-viaje">

                Bienvenida a Japón. 🇯🇵

                <br><br>

                Conseguir el viaje fue complicado.

                <br><br>

                Conseguir un caballo fue
                sorprendentemente fácil.

            </div>

        </div>

        <button class="regalo"
                onclick="japon2()">
            Continuar
        </button>

    `;
}

function japon2(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>🇯🇵 Viaje a Japón</h1>

        <div class="progreso">
            ● ● ○
        </div>

        <div class="postal">

            <h2>🌸 Santuario</h2>

            <img src="imagenes/santuario_japon.png">

            <div class="mensaje-viaje">

                Pensé que antes de la carrera
                podíamos dar una vuelta.

                <br><br>

                Además, no todos los días
                se visitan lugares así.

            </div>

        </div>

<button class="regalo"
        onclick="japon3()">
    Continuar
</button>

    `;
}

function japon3(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>🇯🇵 Viaje a Japón</h1>

        <div class="progreso">
            ● ● ●
        </div>

        <div class="postal">

            <h2>🏇 Carrera Final</h2>

            <img src="imagenes/carrera_uma.png">

            <div class="mensaje-viaje">

                Finalmente llegamos. 🏇

                <br><br>

                Creo que ahora entiendo
                por qué te gusta tanto
                Uma Musume.

                <br><br>

                Aunque sigo sin entender
                a Gold Ship.

            </div>

        </div>

 <button class="regalo"
        onclick="finalizarJapon()">
    Volver a los tickets
</button>

    `;
}

function destino1(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>💸 Destino Secreto</h1>

        <div class="progreso">
            ● ○ ○ ○
        </div>

        <div class="postal">

            <h2>💻 Revisando presupuesto</h2>

            <img src="imagenes/presupuesto.png">

            <div class="mensaje-viaje">

                Después de tantos viajes...

                <br><br>

                Pensé que quizá podríamos
                planear uno más.

                <br><br>

                Así que decidí revisar
                el presupuesto disponible.

            </div>

        </div>

        <button class="regalo"
                onclick="destino2()">
            Continuar
        </button>

    `;
}

function destino2(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>💸 Destino Secreto</h1>

        <div class="progreso">
            ● ● ○ ○
        </div>

        <div class="postal">

            <h2>📉 Resultado</h2>

            <img src="imagenes/fondos_insuficientes.png">

            <div class="mensaje-viaje">

                Después de una exhaustiva
                investigación financiera...

                <br><br>

                Descubrí algo preocupante.

                <br><br>

                Parece que ya no queda mucho.

            </div>

        </div>

        <button class="regalo"
                onclick="destino3()">
            Continuar
        </button>

    `;
}

function destino3(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>💸 Destino Secreto</h1>

        <div class="progreso">
            ● ● ● ○
        </div>

        <div class="postal">

            <h2>🏪 Plan alternativo</h2>

            <img src="imagenes/destino_alternativo.png">

            <div class="mensaje-viaje">

                Pero no todo estaba perdido.

                <br><br>

                El sistema encontró
                una alternativa compatible
                con el presupuesto restante.

            </div>

        </div>

        <button class="regalo"
                onclick="destino4()">
            Continuar
        </button>

    `;
}

function destino4(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>💸 Destino Secreto</h1>

        <div class="progreso">
            ● ● ● ●
        </div>

        <div class="postal">

            <h2>😅 Resultado final</h2>

            <img src="imagenes/sin_dinero.png">

            <div class="mensaje-viaje">

                Parece que el presupuesto
                decidió tomarse un descanso.

                <br><br>

                Por ahora tendremos que
                ahorrar para la próxima aventura.

                <br><br>

                Pero al menos puedo decir
                que lo intenté.

            </div>

        </div>

<button class="regalo"
        onclick="volver()">
    Volver al menú principal
</button>

    `;
}

function regaloFinal(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <h1>💌 Regalo Final</h1>

        <p class="mensaje-pokemon">

            Has llegado al final.

            <br><br>

            Hay una última carta para ti.

        </p>

        <img
            src="imagenes/sobre_cerrado.png"
            class="sobre-final"
            onclick="abrirCartaFinal()">

    `;
}

function abrirCartaFinal(){

    const contenido =
        document.getElementById("contenido");

    contenido.innerHTML = `

        <div class="carta-final">

            <img
                src="imagenes/carta_final.png"
                class="imagen-carta-final">

            <button
                class="regalo"
                onclick="volver()">

                ❤️ Gracias por abrir todos los regalos ❤️

            </button>

        </div>

    `;
}