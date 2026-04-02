import * as THREE from 'three';

export function initParticles(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 800 : 2000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;

    velocities[i] = (Math.random() - 0.5) * 0.002;
    velocities[i + 1] = (Math.random() - 0.5) * 0.002;
    velocities[i + 2] = (Math.random() - 0.5) * 0.002;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x06b6d4,
    size: isMobile ? 0.02 : 0.015,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  camera.position.z = 5;

  // Mouse interaction
  const mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    const pos = geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count * 3; i += 3) {
      pos.array[i] += velocities[i];
      pos.array[i + 1] += velocities[i + 1];
      pos.array[i + 2] += velocities[i + 2];

      // Boundary wrap
      for (let j = 0; j < 3; j++) {
        if (pos.array[i + j] > 5) pos.array[i + j] = -5;
        if (pos.array[i + j] < -5) pos.array[i + j] = 5;
      }
    }
    pos.needsUpdate = true;

    // Mouse influence on rotation
    particles.rotation.x += (mouse.y * 0.1 - particles.rotation.x) * 0.02;
    particles.rotation.y += (mouse.x * 0.1 - particles.rotation.y) * 0.02;

    renderer.render(scene, camera);
  }

  animate();
}
