const db = JSON.parse(localStorage.getItem("smojo_scores") || "{}");
const tbody = document.querySelector("#scoreTable tbody");

for (const [name, scores] of Object.entries(db)) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${name}</td>
  <td>${scores.level1 ?? "-"}</td>
  <td>${scores.level2 ?? "-"}</td>
  <td>${scores.level3 ?? "-"}</td>
  <td>${scores.final ?? "-"}</td>`;
  tbody.appendChild(tr);
}
