var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

//aqui le estamos pasando las cordenadas de la primeera linea por fuera de la funcion
var matrizline = [[5, 7],
                  [9, 2],
                  [3, 4],
                  [5, 7],
                  [9, 2]
                ];
var martrix = [matrizline];
var line = bresenhamLine(
   martrix[0][0][1],
    martrix[0][1][0],
     martrix[0][1][1],
      0x00ff00);

scene.add(line);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);


//funcion bresenham que me va a pintar las lineas 
function bresenhamLine(X1, Y1, X2, Y2, color) {
    var geometry = new THREE.Geometry();
  
    var dy = Y2 - Y1;
    var dx = X2 - X1;
    var IncYi, IncXi, IncYr, IncXr;
  
    if (dy >= 0) {
      IncYi = 1;
    } else {
      dy = -dy;
      IncYi = -1;
    }
  
    if (dx >= 0) {
      IncXi = 1;
    } else {
      dx = -dx;
      IncXi = -1;
    }
  
    if (dx >= dy) {
      IncYr = 0;
      IncXr = IncXi;
    } else {
      IncXr = 0;
      IncYr = IncYi;
      var k = dx;
      dx = dy;
      dy = k;
    }
  
    var x = X1;
    var y = Y1;
    var avance = 2 * dy - dx;
    var n = dx;
  
    while (n > 0) {
      geometry.vertices.push(new THREE.Vector3(x, y, 0));
      if (avance >= 0) {
        y += IncYi;
        avance -= 2 * dx;
      }
      x += IncXi;
      avance += 2 * dy;
      n--;
    }
  
    geometry.vertices.push(new THREE.Vector3(X2, Y2, 0));
  
    var material = new THREE.LineBasicMaterial({
      color: color
    });
  
    var line = new THREE.Line(geometry, material);
  
    return line;
  }
  