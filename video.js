function main()
{
  console.log("Video 02...")

  videogrande = document.getElementById("videogrande")
  videogrande.width = 800;
  videogrande.height= 400;


  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  //-- Establecer el tamaño del vídeo
  video1.width = 200;
  video1.height= 100;
  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.onmouseover = () => {
    console.log("Raton encima")
  //  video1.unmuted
  }
  video1.onmouseout = () => {
    console.log("raton fuera")
    // vide1.muted
  }



  video2 = document.getElementById("video2")
  //-- Establecer el tamaño del vídeo
  video2.width = 200;
  video2.height= 100;
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.onmouseover = () => {
    console.log("Raton encima")
  //  video1.unmuted
  }
  video2.onmouseout = () => {
    console.log("raton fuera")
    // vide1.muted
  }



  video3 = document.getElementById("video3")
  //-- Establecer el tamaño del vídeo
  video3.width = 200;
  video3.height= 100;
  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video3.onmouseover = () => {
    console.log("Raton encima")
  //  video1.unmuted
  }
  video3.onmouseout = () => {
    console.log("raton fuera")
    // vide1.muted
  }




  b1 = document.getElementById('b1')
  b2 = document.getElementById('b2')
  b3 = document.getElementById('b3')
  b1.onclick = () => {
    videogrande.src = video1.src;
    videogrande.currentTime = video1.currentTime;
  }
  b2.onclick = () => {
    videogrande.src = video2.src;
    videogrande.currentTime = video2.currentTime;
  }
  b3.onclick = () => {
    videogrande.src = video3.src;
    videogrande.currentTime = video3.currentTime;
  }
}
