/*
 * 3D‑Animation für den Döner‑Spieß. 
 * Nutzt Three.js, um einen rotierenden Zylinder zu rendern.
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('donerCanvas');
    if (!canvas) return;

    // Renderer mit Alpha‑Hintergrund, damit der Canvas den hero‑Hintergrund durchscheinen lässt
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Szene und Kamera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    camera.position.z = 6;

    // Umgebungslicht und gerichtetes Licht
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Geometrie und Material: Zylinder als stilisierter Döner‑Spieß
    const geometry = new THREE.CylinderGeometry(1, 1, 4, 64);
    const material = new THREE.MeshStandardMaterial({
        color: 0x8B4513,      // brauner Farbton wie gegrilltes Fleisch
        metalness: 0.3,
        roughness: 0.6
    });
    const doner = new THREE.Mesh(geometry, material);
    scene.add(doner);

    // Beim Resize responsive Anpassung
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animationsschleife: dreht den Zylinder um zwei Achsen
    function animate() {
        requestAnimationFrame(animate);
        doner.rotation.x += 0.01;
        doner.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});