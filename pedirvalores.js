//Pedircordenadas
//Pedir cordenadas y pintar puntos en la pantalla
// Inicializar la escena y la cámara
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//hacemos el render 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//pide las cordenadas al usuario para x , y 

//pedimos las cordenadas en x y y 
vertices = [];
    const x = 0;
    const y = 0;
    const z = 0;

vertices.push(x,y,z);    
damecolor = 0x00ff00;

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const material = new THREE.PointsMaterial({ size: 0.1, color: damecolor });
const points = new THREE.Points(geometry, material);
scene.add(points);
renderer.render(scene, camera);

