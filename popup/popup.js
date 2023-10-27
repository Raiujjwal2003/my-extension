// Function to make an API call
function makeApiCall(domain) {
    const apiUrl = `http://localhost:5000/${domain}`;
    
    // Use fetch or another method to make the API call
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // Get the current domain and call the API
  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.query({ active: true, currentWindow: true })[0].id },
    function: () => {
      const currentDomain = window.location.hostname;
      makeApiCall(currentDomain);
    }
  });
  
  // Attach a click event listener to the button
  document.getElementById("callApiButton").addEventListener("click", () => {
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.query({ active: true, currentWindow: true })[0].id },
      function: () => {
        const currentDomain = window.location.hostname;
        makeApiCall(currentDomain);
      }
    });
  });
  