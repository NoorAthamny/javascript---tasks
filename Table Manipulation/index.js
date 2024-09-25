const rows = document.querySelectorAll("#dataTable tr");

function toggleColumn(index) {
  rows.forEach((row) => {
    const cell = row.cells[index];
    cell.style.display = cell.style.display === "none" ? "" : "none";
  });
}

function resetTable() {
  rows.forEach((row) => {
    const newArray = Array.from(row.cells);
    newArray.forEach((cell) => {
      cell.style.display = "";
    });
  });
}
