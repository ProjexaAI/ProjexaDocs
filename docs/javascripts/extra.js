// Load Plausible Analytics with proper configuration
(function() {
  'use strict';
  
  // Create and inject the analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = 'https://insights.projexa.ai/script.js';
  script.setAttribute('data-website-id', '098c3b9e-18dd-42fa-90a5-bda49435397b');
  script.setAttribute('data-domain', 'docs.projexa.ai');
  
  // Error handling
  script.onerror = function() {
    console.warn('Failed to load Plausible Analytics');
  };
  
  script.onload = function() {
    console.log('Plausible Analytics loaded successfully');
  };
  
  // Inject the script
  document.head.appendChild(script);
  
  // Initialize plausible queue
  window.plausible = window.plausible || function() { 
    (window.plausible.q = window.plausible.q || []).push(arguments); 
  };
  
})();

// MkDocs Material theme compatibility
document$.subscribe(function() {
  console.log('Page loaded - Analytics active');
});
