// Inicializar la escena y la cámara
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100;

// creamos el punto
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(0, 0, 0));

var material = new THREE.PointsMaterial({ size: 10 });

var point = new THREE.Points(geometry, material);
//scene.add(point);

/*
var LineaBresenham = new THREE.Points(geometry, material);
scene.add(LineaBresenham);
*/



// hacemos nuestra funcion
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
        color = 0xff0000; // color de la linea
        DibujarPixel(X, Y, color); // Como mínimo se dibujará siempre 1 píxel (punto).
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


// función para dibujar un pixel en la escena
function DibujarPixel(x, y) {
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3(x, y, 0));
    var mat = new THREE.PointsMaterial({ size: 5, color: color });
    var point = new THREE.Points(geo, mat);
    scene.add(point);
}


function dibujarPuntos(pt, vertices) {
    
    var i=0; //variable para guardar el valor de la iteracion
    do{
        var x1 = vertices[i][0];
        var y1 = vertices[i][1];
        if(i==pt){
            var x2 = vertices[0][0];
            var y2 = vertices[0][1];

        }
        else{
            var x2 = vertices[i+1][0];
            var y2 = vertices[i+1][1];
        }
        bresenhamLine(x1, y1, x2, y2);
        i++;
    }while(i<pt);
}

//creamos la matriz
let vertices = [[20, 20],
                [70, 20],
                [50, 40], 
                 [90, 80],
                 [20, 80],
                 [10,20]
];

var pt=[5];
for (var i = 0; i < vertices.length; i++) {
    // Agregamos la coordenada x del vértice
    pt.push(vertices[i][0]);
    // Agregamos la coordenada y del vértice
    pt.push(vertices[i][1]);
}

bresenhamLine(vertices[0][0], vertices[0][1], vertices[1][0], vertices[1][1]);

function transladar (x,y,dy,dy,color){
    var por =[x,y,1];

    var t =[[1,0,dx],
            [0,1,dy],
            [0,0,1]];   

    for(let i=0; i<3; i++){
        let suma = 0;
        for(let k=0; k<3; k++){
            suma += por[k]*t[k][j];
            }
            resultado.push(suma);
        }
    var xp = resultado[0];
    var yp = resultado[1];
    dibujarPuntos(xp,yp,0,color)
    }

    transladar();

// Inicializar el renderer

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);




