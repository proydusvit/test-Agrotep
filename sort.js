document.addEventListener("DOMContentLoaded", () => {
     let isNameSortedAscending = false;
      let isSurnameSortedAscending = false;
      let isScoreSortedAscending = false;

      const sortTable = (columnIndex, ascending) => {
        const table = document.querySelector(".w3-table-all");
        const rows = Array.from(table.getElementsByTagName("tr"));

        rows.shift();

        rows.sort((a, b) => {
          let cellA = a.getElementsByTagName("td")[columnIndex].textContent.trim();
          let cellB = b.getElementsByTagName("td")[columnIndex].textContent.trim();

          if (!isNaN(cellA) && !isNaN(cellB)) {
         
            return ascending ? parseInt(cellA) - parseInt(cellB) : parseInt(cellB) - parseInt(cellA);
          } else {
            
            return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
          }
        });

        const fragment = document.createDocumentFragment();
        rows.forEach(row => {
          fragment.appendChild(row);
        });

        table.appendChild(fragment);
      };

      document.getElementById("sortByNameAsc").addEventListener("click", () => {
        sortTable(0, true); 
        isNameSortedAscending = true;
      });

      document.getElementById("sortByNameDesc").addEventListener("click", () => {
        sortTable(0, false); 
        isNameSortedAscending = false;
      });

      document.getElementById("sortBySurnameAsc").addEventListener("click", () => {
        sortTable(1, true); 
        isSurnameSortedAscending = true;
      });

      document.getElementById("sortBySurnameDesc").addEventListener("click", () => {
        sortTable(1, false); 
        isSurnameSortedAscending = false;
      });

      document.getElementById("sortByScoreAsc").addEventListener("click", () => {
        sortTable(2, true); 
        isScoreSortedAscending = true;
      });

      document.getElementById("sortByScoreDesc").addEventListener("click", () => {
        sortTable(2, false); 
        isScoreSortedAscending = false;
      });

});