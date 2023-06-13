
// Inicializar la escena y la cámara
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100;

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
//Punto(40,30, 0xffff00);


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
        color = 0x00ff00; // color de la linea en este caso es rojo
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
  
  //let vertices = [[-100, 20], 
//             [100, 20],
  //              [50, 20]
  //];
  
  
dibujarPuntos(dibujarCurva);
  //mi funcion dibujar puntos me recorre el arreglo y me manda los valores a la funcion bresenhamLine
  //para que este me dibuje las lineas en la escena

//------------------------------------------------------------------------------------------------------
//Ejercicio numero 4 Curvar lineas
//------------------------------------------------------------------------------------------------------
function Curva_bezer(x0, y0, x1, y1, x2, y2, x3, y3) {
    var t = 0.0;
    var dt = 0.001;

    do {
        //cuadratica 
        /*
        var X = Math.pow(1 - t, 2) * x0 + 2 * t * (1 - t) * x1 + Math.pow(t, 2) * x2;
        var Y = Math.pow(1 - t, 2) * y0 + 2 * t * (1 - t) * y1 + Math.pow(t, 2) * y2;
        
        */

       //cubica 

        var X = Math.pow(1 - t, 3) * x0 + 3 * Math.pow(1 - t, 2) * t * x1 + 3 * (1 - t) * Math.pow(t, 2) * x2 + Math.pow(t, 3) * x3;
        var Y = Math.pow(1 - t, 3) * y0 + 3 * Math.pow(1 - t, 2) * t * y1 + 3 * (1 - t) * Math.pow(t, 2) * y2 + Math.pow(t, 3) * y3;

        Punto(X, Y, 0xff0000);
        t += dt;
    } while (t <= 1);
}

function dibujarCurva(vertices) {
    for (var i = 0; i < vertices.length - 2; i += 2) {
        var x0 = vertices[i][0];
        var y0 = vertices[i][1];
        var x1 = vertices[i + 1][0];
        var y1 = vertices[i + 1][1];
        var x2 = vertices[i + 2][0];
        var y2 = vertices[i + 2][1];
        var x3 = vertices[i + 3][0];
        var y3 = vertices[i + 3][1];
        
        Curva_bezer(x0, y0, x1, y1, x2, y2 ,x3, y3);
    }
}

//var vertices = [];

/* var array = [[20, 100], [110, 60], [100, 160], //primera ccurva 
[100, 150], [150, 30], [350, 10], //segunda curva
[300, 200], [600, 0], [350, -250],
[350, -250], [300,-200], [350, -250],
[250, -250], [200, -150], [150, -250],
[150, -250], [50, -150], [110, -400]];
*/
var array = [[30,31],[40,25],[75,-15],[20,-27,],
[21,-26],[60,-4],[14,7],[17,-8],
[18,-7],[18,5],[-7,8],[-3,-40],
[-3,-40],[-5,8],[-20,5],[-30,-8],
[-29,-7],[-50,10],[-50,-25],[-30,-25],
[-31,-24],[-55,-30],[-85,15],[-30,28],
[-30,29],[-22,20],[-10,15],[-10,37],
[-9,38],[-6,35],[0,25],[5,37],
[6,39],[11,10],[25,22],[29,30]];



var gruposDeTres = [];

for (var i = 0; i < array.length; i += 3) {
    var grupo = array.slice(i, i + 3);
    gruposDeTres.push(grupo);
}

var vertices = gruposDeTres.flat();

//

/*
var gruposDeCuatro = [];

for (var i = 0; i < vertices.length; i += 4) {
    var grupo = vertices.slice(i, i + 4);
    gruposDeCuatro.push(grupo);
}

var vertices = gruposDeCuatro.flat();
*/

dibujarCurva(vertices);




//-------------------------------------------------------------
//ahora vamos a translatar la figura que mostramos en dibujar puntos a otro lugar de la escena
//esto lo vamos a lograr cambiando los valores de let vertices y mandalos a la funcion dibujarPuntos
//para que esta los vuelva a mandar a bresenhamLine y este los dibuje en la escena
function trasladar(vertices, tx, ty) {
    // Crear matriz de transformación
    var T = [    [1, 0, 0],
                [0, 1, 0],
                [tx, ty, 1]
    ];
  
    // Aplicar transformación a cada punto
    var puntosTrasladados = [];
    for (var i = 0; i < vertices.length; i++) {
      var punto = vertices[i];
      var x1 = punto[0];
      var y1 = punto[1];
      var po = [x1, y1, 1];
      var pr = [0, 0, 0];
      for (var j = 0; j <= 2; j++) {
        for (var k = 0; k <= 2; k++) {
          pr[j] += po[k] * T[k][j];
        }
      }
      var x2 = Math.round(pr[0]); //guardamos el valor en x2 y lo redondeamos con math.round nuestro valor pr
      var y2 = Math.round(pr[1]);//lo mismo , se guarda el valor ya redondeado 
      puntosTrasladados.push([x2, y2]); //se guardan y se mandan a mi var puntosTrasladados
    }
  
    // Dibujar puntos trasladados
    dibujarPuntos(puntosTrasladados); //a nuestra primera funcion mandamos los valores de puntosTrasladados
  }
  
  // Llamar a la función trasladar con los valores deseados

  //trasladar(vertices, 60, 70);     //aqui tomamos los valores de la matriz y hacemos la operacion 
                                    //aqui lo que hacemos es pedir los valores de la matriz
                                    //y de damos el valor por el que se van a multiplicar para moverlos 

  
//ahora vamos a hacer la funcion que nos rotatara la figura
//es lo mismo nomas que hay que cambiar los valores con seno y coseno

//-------------------------------------------------------------
//Rotar figura 
//-------------------------------------------------------------
function rotar(vertices, angulo) {
    // Crear matriz de transformación
    var T = [    [Math.cos(angulo), Math.sin(angulo), 0],
                [-Math.sin(angulo), Math.cos(angulo), 0],
                [0, 0, 1]
    ];

    // Iterar sobre cada punto y aplicar la transformación
    for (var i = 0; i < vertices.length; i++) {
        var x = vertices[i][0];
        var y = vertices[i][1];
        var po = [x, y, 1];
        var pr = [0, 0, 0];

        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < 3; k++) {
                pr[j] += po[k] * T[k][j];
            }
        }

        vertices[i][0] = Math.round(pr[0]);
        vertices[i][1] = Math.round(pr[1]);
    }
    
    // Dibujar los puntos rotados
    dibujarPuntos(vertices);

}
 //mandamos los valores a dibujarPuntos
//rotar(vertices, Math.PI/3); //aqui lo dividimos pi entre 3 para que se mueva en 60 grados






renderer.render(scene, camera);
//El motivo por el cual el renderizado se hace al final del código es que,
// antes de renderizar la escena, es necesario agregar todos los objetos que
// se van a visualizar. En tu caso, el punto que deseas dibujar se agrega a la escena
// en la función DibujarPixel. Por lo tanto, es necesario llamar a esta función antes de 
//renderizar la escena. Si el renderizado se hiciera antes de agregar el punto a la escena,
// el punto no se mostraría en la imagen generada.

//muestra mi Pixel en la ecena

