// Audio fallback for browsers that don't support the audio element
document.addEventListener('DOMContentLoaded', function() {
  const narration = document.getElementById('narration');
  
  // Check if the browser supports the audio element
  if (narration && typeof narration.play !== 'function') {
    console.log('Audio not supported, creating fallback');
    
    // Create a text overlay for the narration
    const textOverlay = document.createElement('div');
    textOverlay.className = 'narration-text';
    textOverlay.innerHTML = 'Welcome to Lamsal Graphics, your destination for creative design solutions.';
    textOverlay.style.position = 'absolute';
    textOverlay.style.bottom = '4rem';
    textOverlay.style.left = '0';
    textOverlay.style.right = '0';
    textOverlay.style.textAlign = 'center';
    textOverlay.style.color = 'white';
    textOverlay.style.fontSize = '1.2rem';
    textOverlay.style.padding = '1rem';
    textOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    textOverlay.style.opacity = '0';
    textOverlay.style.transition = 'opacity 1s ease';
    
    document.getElementById('entrance-animation').appendChild(textOverlay);
    
    // Show the text after a delay
    setTimeout(() => {
      textOverlay.style.opacity = '1';
      
      // Hide the text after 5 seconds
      setTimeout(() => {
        textOverlay.style.opacity = '0';
      }, 5000);
    }, 3000);
  }
});