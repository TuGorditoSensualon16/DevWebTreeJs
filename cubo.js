// Inicializar la escena y la cámara
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 40;

// Crear el cubo
/*
var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

/*

//capsula 
/*
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );
*/


//circulo
/*
const geometry = new THREE.CircleGeometry( 5, 32 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const circle = new THREE.Mesh( geometry, material ); 
scene.add( circle );
*/

//piramide
/*
const geometry = new THREE.ConeGeometry( 5, 20, 32 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(geometry, material ); 
scene.add( cone );
*/


//cilindor
/*
const geometry = new THREE.CylinderGeometry(Math.PI * 5, Math.PI * 5, 20, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);
*/

//dodecaedro 
/*
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x99ff0000, wireframe: true });
const deca = new THREE.Mesh(geometry, material);
scene.add(deca);
camera.position.z = 2;

*/

//line
/*
const geometry = new THREE.BoxGeometry( 100, 100, 100 ); 
const edges = new THREE.EdgesGeometry( geometry ); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) ); 
scene.add( line );
*/

//extrudegeometry 
/*
const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

*/


//icosaedro
/*
const geometry = new THREE.IcosahedronGeometry(4,0);
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe:true} );
const icosahedron = new THREE.Mesh( geometry, material );
scene.add( icosahedron );
*/

//lathe
/*
const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const geometry = new THREE.LatheGeometry( points );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );
*/

//octahedron
/*
const geometry = new THREE.OctahedronGeometry(9, 0, 3, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
const Octahedron = new THREE.Mesh(geometry, material);
scene.add(Octahedron);
*/

//plane


//SphereGeometry
/*
const geometry = new THREE.PlaneGeometry( 10, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );
*/

//SphereGeometry
/*
const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const sphere = new THREE.Mesh( geometry, material ); 
scene.add( sphere );
*/

//torus
/*
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const torus = new THREE.Mesh( geometry, material ); 
scene.add( torus );
*/



// Inicializar el renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Anima el cubo rotándolo en el eje Y

var animate = function () {
  requestAnimationFrame(animate);


  //icosahedron
  /*
  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.01;
  */
  //piramide
  /*
  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;
  cone.rotation.z += 0.01;
  */
  /*
  cube.rotation.y += 0.01;
  cube.rotation.x += 0.01;
  cube.rotation.z += 0.01;
  

  //circulo 
  circle.rotation.y += 0.01;
  circle.rotation.x += 0.01;
  circle.rotation.z += 0.01;

  //cono
  cono.rotation.x += 0.01;
	cono.rotation.y += 0.01;

  //cilindro 
  cylinder.rotation.x += 0.03;
  cylinder.rotation.y += 0.002;
  cylinder.rotation.z += 0.001;

  //dodecaedro
  deca.rotation.x += 0.001;
	deca.rotation.y += 0.002;
	deca.rotation.z += 0.002;

  //line 
  line.rotation.x += 0.001;
  line.rotation.y += 0.002;
  line.rotation.z += 0.002;

  //mesh 
  mesh.rotation.x += 0.001;
  mesh.rotation.y += 0.002;

  //icosaedro 
  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.02;

  //lathe
  lathe.rotation.x += 0.01;
  lathe.rotation.y += 0.02;

  //octahedron
  Octahedron.rotation.x += 0.01;
  Octahedron.rotation.y += 0.02;

  //plane
  plane.rotation.x += 0.01;
  plane.rotation.y += 0.02;

  //SphereGeometry
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.02;


  //torus
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.02;
  torus.rotation.z += 0.02;

  */

  //Octahedron
  /*
  Octahedron.rotation.x += 0.01;
  Octahedron.rotation.y += 0.02;
  Octahedron.rotation.z += 0.02;
*/
  renderer.render(scene, camera);
};

renderer.render(scene, camera);


animate();
