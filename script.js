const checkbox = document.getElementById('checkbox-btn');

checkbox.addEventListener('change', () => {
if (checkbox.checked) {
  // 🌑 Dark Mode — Modern Neon + Sleek
  document.documentElement.style.setProperty('--brc', 'linear-gradient(to right, #0f0c29, #302b63, #24243e)');
  document.documentElement.style.setProperty('--fc', '#e0e0e0');
  document.documentElement.style.setProperty('--bac', '#1e1e2f');
  document.documentElement.style.setProperty('--box-shadow', '0 0 30px rgba(128, 0, 255, 0.4)');
  document.documentElement.style.setProperty('--pfc', 'rgba(220, 220, 220, 0.5)');
  document.getElementById("paragraph").innerHTML="চলো একসাথে দিনের আলোয় ঘুরে আসি, রোদ ঝলমলে হাতে হাত রেখে সারা দিন কেবল তোমারই কথা বলি। রাজি থাকলে গুটা মারো বাটনে 🥺";
} else {
    // ☀️ Light Mode — Pastel Neon + Bright
    document.documentElement.style.setProperty('--brc', 'linear-gradient(to right, #fceabb, #f8b500)');
    document.documentElement.style.setProperty('--fc', '#2b2b2b');
    document.documentElement.style.setProperty('--bac', '#fefefe');
    document.documentElement.style.setProperty('--box-shadow', '0 0 30px rgba(255, 165, 0, 0.3)');
    document.documentElement.style.setProperty('--pfc', 'rgba(0, 0, 0, 0.4)');
    document.getElementById("paragraph").innerHTML="চলো একসাথে রাতের আকাশের নীচে ঘুরে আসি, চাঁদের আলোয় হাত ধরে সারা রাত কেবল তোমারই কথা বলি। রাজি থাকলে গুতা মারো বাটনে🥺";
}


});