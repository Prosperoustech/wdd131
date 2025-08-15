document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = "Last Modification: " + document.lastModified;

// === Wind Chill Calculation ===
const temp = parseFloat(document.getElementById('temp').textContent);
const wind = parseFloat(document.getElementById('wind').textContent);

function calculateWindChill(t, w) {
    // Wind chill formula in Celsius
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)).toFixed(1);
}

function displayWindChill() {
    const chillSpan = document.getElementById('chill');
    if (temp <= 10 && wind > 4.8) {
      chillSpan.textContent = calculateWindChill(temp, wind);
    } else {
      chillSpan.textContent = "N/A";
    }
}

displayWindChill();