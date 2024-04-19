const galeria=document.getElementById("galeriafotos")
const botonSi = document.getElementById("boton-si");
const container = document.getElementById("contenedor");
let apretado=false
const textoNuevo=document.getElementById("texto-nuevo")
if (window.innerWidth <= 600) {
    document.body.style.overflow = 'hidden';

    window.addEventListener('touchmove', function(e) {
      e.preventDefault();
    });
  }
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("no") && !apretado) {
    event.target.remove();

    const elem = document.createElement("button");
    elem.classList.add("no-estilo", "shake");
    elem.id="boton-no"
    elem.innerHTML = "No te amo y nunca te amé :(";
    container.appendChild(elem);

    const error = document.createElement("p")
    error.innerHTML = "Error, volve a intentarlo trola"
    error.style.color="red"
    error.style.fontWeight="bold"
    container.appendChild(error)


    setTimeout(()=>{
        elem.classList.remove("shake")
        if (!apretado){
            elem.classList.add("no");
        }
        error.remove()
    }, 3000)
  }
});


botonSi.addEventListener("click", function() {
  const lluviaContainer = document.getElementById("lluvia");
    apretado=true
  // Crea corazones y añádelos al contenedor
  for (let i = 0; i < 100; i++) {
    const corazon = document.createElement("img");
    corazon.classList.add("corazon");
    corazon.src = "corazon.webp"; // Ruta a tu imagen de corazón
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 2 + 1 + "s";
    lluviaContainer.appendChild(corazon);
  }

  // Deshabilita el botón después de hacer clic
  botonSi.disabled = true;
  const botonNo = document.getElementById("boton-no")
  botonNo.classList.remove("no")
  document.body.style.overflow = 'auto';


  setTimeout(()=>{
    container.style.opacity="0"
    setTimeout(()=>{
        textoNuevo.style.display="block"
        container.style.display="none"
    },1000)
  }, 5000)

  
});






const idiomasContainer = document.getElementById("idiomas");

      // Lista de códigos de idiomas de Google Translate
      const codigosIdiomas = [
        "es", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "ny", "zh-CN",
        "co", "hr", "cs", "da", "nl", "en", "eo", "et", "tl", "fi", "fr", "fy", "gl", "ka", "de", "el",
        "gu", "ht", "ha", "haw", "iw", "hi", "hmn", "hu", "is", "ig", "id", "ga", "it", "ja", "jw", "kn",
        "kk", "km", "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi",
        "mr", "mn", "my", "ne", "no", "ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st",
        "sn", "sd", "si", "sk", "sl", "so", "af", "su", "sw", "sv", "tg", "ta", "te", "th", "tr", "uk",
        "ur", "ug", "uz", "vi", "cy", "xh", "yi", "yo", "zu", "ab", "aa", "an", "as", "bh", "bo", "br",
        "io", "kv", "mi", "oc", "or", "qu", "rm", "rw", "sh", "su", "tt", "ug", "vi", "wo", "yi", "za"
      ];
    
      
      // Puedes usar estos códigos de idioma según tus necesidades.
      

      // Texto original
      const mensajeOriginal = "te amo";

      // Itera sobre los códigos de idiomas y realiza las traducciones
      codigosIdiomas.forEach(function(codigoIdioma) {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${codigoIdioma}&dt=t&q=${encodeURIComponent(mensajeOriginal)}`;

        // Realiza una solicitud HTTP para obtener la traducción
        fetch(url)
          .then(response => response.json())
          .then(data => {
            // Extrae la traducción del resultado
            const traduccion = data[0][0][0];

            // Agrega el idioma y la traducción a la lista
            const listItem = document.createElement("li");
            listItem.textContent = `${traduccion}`;
            idiomasContainer.appendChild(listItem);
          })
          .catch(error => console.error(`Error al traducir a ${codigoIdioma}: ${error}`));
      });
      let llego=false
        function haLlegadoAlFinal() {
          const distanciaAlFondo = document.documentElement.offsetHeight - (window.innerHeight + window.scrollY);
  
          if (distanciaAlFondo < 100 && !llego) {
            // El usuario ha llegado al final, realiza la acción que desees
            textoNuevo.style.opacity="0"
            setTimeout(()=>{
                textoNuevo.style.display="none"
                galeria.style.display="flex"
                galeria.style.opacity="100"
                window.scrollTo(0, 0);
                llego=true
            },2000)
          }
        }
  
        // Agrega un evento de scroll al documento
            document.addEventListener("scroll", haLlegadoAlFinal);




const poemas=document.getElementById("poema")
const coratocar = document.getElementById("coratocar")

coratocar.addEventListener("click",()=>{
    galeria.style.opacity="0"
    setTimeout(()=>{
        galeria.style.display="none"
        poemas.style.display="flex"
    },1000)
})











            const frasesLindas = [
                "Eres la razón por la que sonrío todos los días.",
                "A tu lado, cada día es una aventura emocionante.",
                "Tus abrazos son mi lugar favorito en el mundo.",
                "Eres más hermosa cada día que pasa.",
                "Tu amor ilumina incluso los días más oscuros.",
                "Contigo, el amor es siempre una celebración.",
                "Tus besos son la mejor medicina para cualquier tristeza.",
                "Eres mi confidente y mi mejor amiga.",
                "Cada momento contigo es un tesoro inolvidable.",
                "Tu presencia hace que mi mundo sea completo.",
                "Eres mi musa, mi inspiración para todo.",
                "La forma en que amas hace que el mundo sea un lugar mejor.",
                "Eres la melodía que llena mi corazón de alegría.",
                "Nuestra conexión es tan única y especial.",
                "Amar es fácil contigo a mi lado.",
                "Tus palabras de aliento son mi mayor fortaleza.",
                "Eres la flor más hermosa en el jardín de mi vida.",
                "Gracias por ser la razón detrás de mis mejores momentos.",
                "Eres mi sueño hecho realidad, mi realidad más hermosa.",
                "La forma en que te preocupas por los demás me inspira.",
                "Contigo, cada día es el Día de San Valentín.",
                "Eres el sol que ilumina mi mundo gris.",
                "Tus risas son la banda sonora de mi felicidad.",
                "Amar es descubrir el mundo contigo.",
                "Eres mi refugio seguro en cualquier tormenta.",
                "La chispa de tu amor enciende mi corazón.",
                "Tus ojos son la ventana a un universo de amor.",
                "Eres mi paz en medio del caos.",
                "Gracias por hacer cada día especial y significativo.",
                "Eres el sueño que nunca quiero despertar.",
                "Tu amor es el regalo más valioso que he recibido.",
                "Eres el ingrediente secreto que le da sabor a mi vida.",
                "A tu lado, cada desafío se convierte en una oportunidad.",
                "Eres mi confidente más fiel y mi apoyo incondicional.",
                "Tu amor es la luz que guía mi camino.",
                "Amar es descubrir nuevos aspectos de ti cada día.",
                "Eres mi razón para creer en el amor eterno.",
                "Gracias por ser mi razón para sonreír todos los días.",
                "Eres mi mejor amiga y mi amor eterno.",
                "Nuestra historia de amor es mi cuento de hadas favorito.",
                "Tus abrazos son el refugio perfecto para mi corazón.",
                "Eres la poesía que da sentido a mi existencia.",
                "Amar es saber que siempre tengo a alguien a mi lado.",
                "Tus sueños son mis sueños, tus alegrías son mis alegrías.",
                "Eres la pieza que faltaba en el rompecabezas de mi vida.",
                "Nuestro amor es el mejor capítulo de mi historia.",
                "Eres mi amor verdadero, mi complemento perfecto.",
                "Gracias por llenar mi vida de amor y felicidad.",
                "Tus besos son la magia que transforma mis días.",
                "A tu lado, cada día es una página en blanco por escribir.",
                "Eres mi sol en un día nublado, mi luz en la oscuridad.",
                "Nuestro amor es como una canción eterna en mi corazón.",
                "Gracias por ser la razón detrás de mi constante sonrisa.",
                "Eres el motivo de mis canciones, la melodía de mi corazón.",
                "Amar es ver el mundo a través de tus ojos llenos de amor.",
                "Tu amor es el regalo más grande que he recibido.",
                "Eres mi mayor aventura y mi mejor compañía.",
                "La forma en que amas es mi mayor inspiración.",
                "Contigo, cada día es un nuevo comienzo lleno de amor.",
                "Eres mi faro en la oscuridad, mi guía constante.",
                "Tu amor es mi lugar seguro en este mundo caótico.",
                "Gracias por ser mi constante fuente de felicidad.",
                "A tu lado, cada día es un paso más cerca de la eternidad.",
                "Eres mi sueño hecho realidad, mi realidad más hermosa.",
                "Tu amor es el fuego que calienta mi alma.",
                "Nuestro amor es la historia que siempre contaré con orgullo.",
                "Eres la razón por la que cada día es significativo.",
                "Amar es aprender y crecer juntos, y contigo es un placer.",
                "Tu amor es el regalo que nunca dejaré de agradecer.",
                "Eres mi razón para creer en la magia del amor verdadero.",
                "Gracias por hacer que cada día sea especial a tu manera única.",
                "A tu lado, cada día es un recordatorio de lo afortunado que soy.",
                "Eres la estrella que ilumina mi cielo oscuro.",
                "Nuestro amor es la melodía que nunca deja de sonar en mi corazón.",
                "Eres mi novia y mi compañera de por vida.",
                "Gracias por ser el faro que me guía en medio de la tormenta.",
                "Amar es crear recuerdos eternos, y contigo son los mejores.",
                "Tu amor es el regalo que da sentido a mi existencia.",
                "Eres la inspiración detrás de mis logros y mi motivación diaria.",
                "Nuestro amor es el lazo que une nuestras almas para siempre.",
                "A tu lado, cada día es una lección"
            ]
            function generarNumeroAleatorio(limite) {
                return Math.floor(Math.random() * limite);
              }
            
              function generarFrase() {
                const frase = frasesLindas[generarNumeroAleatorio(frasesLindas.length)];
                document.getElementById('frase').innerHTML = frase;
                document.getElementById('frase').style.padding = "20px"
              }