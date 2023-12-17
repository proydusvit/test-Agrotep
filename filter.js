document.addEventListener("DOMContentLoaded", () => {
  const filterTable = (columnIndex, filterValue) => {
    const table = document.querySelector(".table");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
      const cell = rows[i].getElementsByTagName("td")[columnIndex];
      if (cell) {
        let txtValue = cell.textContent || cell.innerText;
        txtValue = txtValue.toLowerCase();
        filterValue = filterValue.toLowerCase();
        if (txtValue.indexOf(filterValue) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  };

  const addInputListener = (elementId, columnIndex) => {
    const inputElement = document.getElementById(elementId);
    if (inputElement) {
      inputElement.addEventListener("input", function() {
        filterTable(columnIndex, this.value);
      });
    }
  };

  addInputListener("nameFilter", 0); 
  addInputListener("surnameFilter", 1);
  addInputListener("scoreFilter", 2); 
});
