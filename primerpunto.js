function dibujarPunto(x, y) {
    // Inicializar la escena y la cámara
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300;
  
    // creamos el punto
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(x, y, 0));
  
    var material = new THREE.PointsMaterial({ 
      size: 10,
      color: 0xff0000 // rojo
    });
  
    var point = new THREE.Points(geometry, material);
    scene.add(point);
  
    // Inicializar el renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  
    renderer.render(scene, camera);
  }
  
  dibujarPunto(50, 20);