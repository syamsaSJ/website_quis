const result = JSON.parse(localStorage.getItem("lastResult") || "{}");

if (result.name && result.score !== undefined) {
  document.getElementById("name").textContent = "Nama: " + result.name;
  document.getElementById("score").textContent = result.score + "%";
} else {
  document.getElementById("name").textContent = "Data tidak ditemukan.";
}
