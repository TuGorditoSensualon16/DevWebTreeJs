//puntosenpantalla.js

// Inicializar la escena y la cámara
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Crea un arreglo de puntos aleatorios
//con colores gual aleatorios en RGB 
var numPoints = 10;
var points = [];
for (var i = 0; i < numPoints; i++) {
  points.push({
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
    z: Math.random() * 10 - 5,
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
}

// Llamamos a la función drawPoints para dibujar los puntos en la escena
drawPoints(points, 5);

// Inicializar el renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

function drawPoints(points, size) {
  // Crea una nueva geometría
  var geometry = new THREE.Geometry();
  // Agrega cada punto a la geometría como un vertice
  for (var i = 0; i < points.length; i++) {
    geometry.vertices.push(new THREE.Vector3(points[i].x, points[i].y, points[i].z));

    // Crea un nuevo color aleatorio para cada punto con componentes RGB distintos
    var material = new THREE.PointsMaterial({
      size: 5,
      sizeAttenuation: false,
      color: new THREE.Color(points[i].r, points[i].g, points[i].b)
      
    });

    // Crea una nueva instancia de puntos con la geometría y material especificados
    var point = new THREE.Points(geometry, material);

    // Agrega la instancia de puntos a la escena
    scene.add(point);
  }
}
