document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000, // Animation duration
        once: true, // Whether animation should happen only once
    });

    // Three.js Background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const myDiv = document.getElementById('threejs-container'); // Ensure myDiv is defined
    if (myDiv) {
        myDiv.appendChild(renderer.domElement);
    } else {
        console.error("Cannot append renderer: 'threejs-container' not found.");
        return; // Stop execution if container is missing
    }

    // Add 3D objects
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    camera.position.z = 11;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();

    // Parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        torus.rotation.x = y * 0.5;
        torus.rotation.y = x * 0.5;
    });
}); // Closing the DOMContentLoaded event listener
