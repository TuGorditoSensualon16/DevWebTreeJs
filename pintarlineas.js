
import * as THREE from 'three';

const scene = new THREE.Scene();


const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);


//creamos la instancia de la clase 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

//creamos el objeto de la linea 
const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const geometry = new THREE.Geometry();

//calculamos los puntos de la linea 
function bresenham2D(x0, y0, x1, y1) {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = (x0 < x1) ? 1 : -1;
    const sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;

    while (true) {
        geometry.vertices.push(new THREE.Vector3(x0, y0, 0));

        if ((x0 === x1) && (y0 === y1)) break;

        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; x0 += sx; }
        if (e2 < dx) { err += dx; y0 += sy; }
    }
}

//llamamos a la funcion 
bresenham2D(4, 3, 3, 3);

//creamos el objeto y lo llamamos 
const line = new THREE.Line(geometry, material);
scene.add(line);

//renderizamos ecena 
renderer.render(scene, camera);
