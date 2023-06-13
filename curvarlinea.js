// Inicializar la escena y la cámara
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 200;

// Inicializar el renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//aqui agregamos la funcion que dibuja los puntos
//mi funcion dibujar pixel es el punto inicial del ejercicio


function Punto(x, y, color) {
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3(x, y, 0));
    var mat = new THREE.PointsMaterial({ size: 5, color: color });
    var point = new THREE.Points(geo, mat);
    scene.add(point);
}
// llamada a la función DibujarPixel después de la creación de la escena
//aqui dibujamos el primer punto de la ecena 
Punto(40,30, 0xffff00);


//-------------------------------------------------------------
//Funcion trnaslacion de ese punto al punto x=50 y=50
//-------------------------------------------------------------
function Transladar(x,y,dx,dy){
    var x1=x+dx;
    var y1=y+dy;
    Punto(x1,y1, 0xff0000);
}

// Llamada a la función Transladar para trasladar el primer punto a las cordenadas a las que la 
//deseo transladar
//aqui mandamos los valores x y en cero por que solo ocupamos los dx y dy que son las
//nuevas cordenadas a las que quiero transladar mi punto
//Transladar(0, 0, 30, 40);
//-------------------------------------------------------------
//estos de arriba son las nuevas cordenadas del punto 
//las que pasan nuevamente a la funcion DibujarPixel para que se dibuje en la escena
//-------------------------------------------------------------


//-------------------------------------------------------------
//Ejercicio numero 3 
//vamos a crear una cariable matrical con valores que le voy a pasar a mi funcion transladar
//para que este nos dibuje varios puntos en la escena y estas me formen las cuatro esquinas de un cuadrado
//-------------------------------------------------------------
function Figura (matriz){
    for (var i = 0; i < matriz.length; i++) {
        var x = matriz[i][0];
        var y = matriz[i][1];
        Punto(x,y, 0x00ff00);
    }
}
var matriz=[[10,10],[40,10],[40,40],[10,40]];
//Figura(matriz);

//ciclo for que me recorre la ,atriz y me manda los valores a una variables 
//para que este me dibuje los puntos en la escena

//-------------------------------------------------------------
//linea bresenham 
//-------------------------------------------------------------
function bresenhamLine(X1, Y1, X2, Y2) {
    // distancias que se desplaza cada eje 
    var dy = Y2 - Y1;
    var dx = X2 - X1;

    // incremento para las secciones que se avanza inclinado
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

    // incremento para la seccion que se avanza horizontal o recto
    var IncXr, IncYr;
    if (dx >= dy) {
        IncYr = 0;
        IncXr = IncXi;
    } else {
        IncXr = 0;
        IncYr = IncYi;
        // cuando dy es mayor que dx se intercambian los valores
        // para hacer el mismo bucle 
        var k = dx;
        dx = dy;
        dy = k;
    }
//-----------------------------aqui vamos bien

    // iniciamos los valores y de error
    var X = X1;
    var Y = Y1;
    var avR = 2 * dy;
    var av = avR - dx;
    var avI = av - dx;

    do {
        color = 0xff0000; // color de la linea en este caso es rojo
        Punto(X, Y, color); // Como mínimo se dibujará siempre 1 píxel (punto).
        console.log(av + " "); // (debug) para ver los valores de error global que van apareciendo.
        if (av >= 0) {
            X = X + IncXi; // X aumenta en inclinado.
            Y = Y + IncYi; // Y aumenta en inclinado.
            av = av + avI; // Avance Inclinado
        } else {
            X = X + IncXr; // X aumenta en recto.
            Y = Y + IncYr; // Y aumenta en recto.
            av = av + avR; // Avance Recto
        }
    } while (X != X2); // NOTA: La condición de 'Repetir Hasta', se debe cambiar si se elige 'Repetir Mientras'
}
//bresenhamLine(-30, -20, -50, -50);
 //le pasamos valores a donde empieza y donde termina la linea
//pero ya creo nuestro punto inicial en la escena ahora lo volcera a printear en otro lado

//-------------------------------------------------------------
//funcion para tomar valores de un arreglo y dibujarlos en la escena
//-------------------------------------------------------------
function dibujarPuntos(vertices) {
    for (var i = 0; i < vertices.length - 1; i++) {
      var x1 = vertices[i][0];
      var y1 = vertices[i][1];
      var x2 = vertices[i+1][0];
      var y2 = vertices[i+1][1];
      bresenhamLine(x1, y1, x2, y2);
    }
  }
  
  let vertices = [[20, 20],
                  [70, 20],
                  [50, 40], 
                  [90, 80],
                  [20, 80],
                  [10,20]
  ];
  
  
  dibujarPuntos(vertices);