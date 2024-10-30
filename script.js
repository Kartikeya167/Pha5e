document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const outlineText = document.querySelector('.outline-text');
  const solidText = document.querySelector('.solid-text');
  const loadingText = document.querySelector('.loading-text');
  
  // Create a timeline
  const tl = gsap.timeline({
    onComplete: () => {
      // Redirect to home.html after the timeline is complete
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1000); // Optional delay before redirection
    }
  });
  
  // Set initial states
  gsap.set(solidText, {
      'clip-path': 'inset(100% 0 0 0)'
  });
  
  gsap.set(outlineText, {
      opacity: 0
  });

  // Animation sequence
  tl.to(outlineText, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
  })
  .to(loadingText, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut"
  })
  .to(loadingText, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 1
  })
  .to(solidText, {
      'clip-path': 'inset(0% 0 0 0)',
      duration: 1.5,
      ease: "power2.inOut"
  }, "-=0.3");
});
