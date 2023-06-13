
//-------------------------------------------------------------
//ejer numero 2------------------------------------------------
//-------------------------------------------------------------

function dibujarPuntos(puntoinicial, coordenadas, colores) {
  // Inicializar la escena y la cámara
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 300;

  // Crear el punto inicial
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(puntoinicial[0], puntoinicial[1], 0));
  var material = new THREE.PointsMaterial({ 
    size: 10,
    color: puntoinicial[2]
  });
  var point = new THREE.Points(geometry, material);
  scene.add(point);

  // Recorrer la matriz de coordenadas y crear un punto para cada par de coordenadas
  for (var i = 0; i < coordenadas.length; i++) {
    var x = puntoinicial[0] + coordenadas[i][0];
    var y = puntoinicial[1] + coordenadas[i][1];
    
    
    
    // Crear el punto y agregarlo a la escena
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(x, y, 0));
    var material = new THREE.PointsMaterial({ 
      size: 10,
      color: colores[i] 
    });

    var point = new THREE.Points(geometry, material);
    scene.add(point);
  }

  // Inicializar el renderer de la imagen que se mostrara estatica en la pantalla
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.render(scene, camera);
}

var puntoinicial = [0, 0, 0x00ff00];
var coordenadas = [[20, 20], [70, 20], [50, 40], [90, 80], [20, 80], [10, 20]];
var colores = [0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000];

dibujarPuntos(puntoinicial, coordenadas, colores);



