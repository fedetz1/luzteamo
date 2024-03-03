const galeria=document.getElementById("galeriafotos")
const botonSi = document.getElementById("boton-si");
const container = document.getElementById("contenedor");
let apretado=false
const textoNuevo=document.getElementById("texto-nuevo")
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("no") && !apretado) {
    event.target.remove();

    const elem = document.createElement("button");
    elem.classList.add("no-estilo", "shake");
    elem.innerHTML = "No te amo y nunca te amé :(";
    container.appendChild(elem);

    const error = document.createElement("p")
    error.innerHTML = "Error, volve a intentarlo trola"
    error.style.color="red"
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
  for (let i = 0; i < 40; i++) {
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
      const mensajeOriginal = "Te amo";

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
  
          if (distanciaAlFondo < 1 && !llego) {
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

