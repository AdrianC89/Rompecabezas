window.addEventListener('load', (event) => {
    // Reproducir música al cargar la página
    var audio = new Audio('../sound/television-simpsons.mp3');
    audio.play();
  
    // Obtener el botón
    var botonMusica = document.getElementById('botonMusica');
  
    // Definir el comportamiento al hacer clic en el botón
    var musicaActiva = true;
    botonMusica.addEventListener('click', function() {
      if (musicaActiva) {
        audio.pause();
        musicaActiva = false;
        botonMusica.innerHTML = 'REANUDAR MUSICA';
      } else {
        audio.play();
        musicaActiva = true;
        botonMusica.innerHTML = 'PAUSAR MUSICA';
      }
    });
  });