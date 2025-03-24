// Door Animation with Three.js
document.addEventListener('DOMContentLoaded', function() {
  // Scene setup
  const doorContainer = document.getElementById('door-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  doorContainer.appendChild(renderer.domElement);
  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);
  
  // Door frame
  const frameGeometry = new THREE.BoxGeometry(5, 8, 0.5);
  const frameMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x8B4513,
    roughness: 0.7,
    metalness: 0.2
  });
  const doorFrame = new THREE.Mesh(frameGeometry, frameMaterial);
  doorFrame.position.z = -3;
  scene.add(doorFrame);
  
  // Door
  const doorGeometry = new THREE.BoxGeometry(4, 7, 0.3);
  const doorMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xA52A2A,
    roughness: 0.5,
    metalness: 0.3
  });
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  door.position.z = -2.5;
  door.position.x = -2; // Start position (closed)
  
  // Door handle
  const handleGeometry = new THREE.SphereGeometry(0.2, 32, 32);
  const handleMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xD4AF37,
    roughness: 0.3,
    metalness: 0.8
  });
  const doorHandle = new THREE.Mesh(handleGeometry, handleMaterial);
  doorHandle.position.set(1.5, 0, 0.2);
  door.add(doorHandle);
  
  scene.add(door);
  
  // Logo on door
  const logoGeometry = new THREE.PlaneGeometry(2, 1);
  const logoMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xffffff,
    transparent: true,
    opacity: 0.8
  });
  const logo = new THREE.Mesh(logoGeometry, logoMaterial);
  logo.position.set(0, 1, 0.2);
  door.add(logo);
  
  // Position camera
  camera.position.z = 5;
  
  // Animation variables
  let doorOpened = false;
  let animationComplete = false;
  
  // Animation function
  function animate() {
    requestAnimationFrame(animate);
    
    if (!doorOpened && !animationComplete) {
      // Wait for 2 seconds before opening the door
      setTimeout(() => {
        doorOpened = true;
        
        // Play narration
        const narration = document.getElementById('narration');
        narration.play();
        
        // Animate door opening with GSAP
        gsap.to(door.rotation, {
          y: Math.PI / 2,
          duration: 2,
          ease: "power2.inOut",
          onComplete: () => {
            // After door opens, zoom through it
            gsap.to(camera.position, {
              z: -10,
              duration: 2,
              delay: 1,
              ease: "power2.inOut",
              onComplete: () => {
                animationComplete = true;
                
                // Show main content
                setTimeout(() => {
                  document.getElementById('entrance-animation').style.display = 'none';
                  document.getElementById('main-content').classList.remove('hidden');
                  
                  // Initialize main content animations
                  initMainContent();
                }, 500);
              }
            });
          }
        });
      }, 2000);
    }
    
    renderer.render(scene, camera);
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Start animation
  animate();
});