function main()
{
  console.log("Video 02...")

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  //-- Establecer el tamaño del vídeo
  video1.width = 200;
  video1.height= 100;

  video2 = document.getElementById("video2")
  //-- Establecer el tamaño del vídeo
  video2.width = 200;
  video2.height= 100;

  video3 = document.getElementById("video3")
  //-- Establecer el tamaño del vídeo
  video3.width = 200;
  video3.height= 100;
  //-- Boton de Play
  b1 = document.getElementById('b1')
  b2 = document.getElementById('b2')
  b3 = document.getElementById('b3')
  //-- Al apretar el boton de ver video
    console.log("Video 02...")
    //-- Indicar la fuente del vídeo
    video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
    console.log("Video 02...")
    video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
    console.log("Video 02...")
    video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
}
