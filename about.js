 function fetchCatFactAndUpdateTable(row, cellIndex) {
            fetch('https://catfact.ninja/fact')
                .then(response => response.json())
                .then(data => {
                    const table = document.querySelector('tbody');
                    const cell = table.rows[row].cells[cellIndex];
                    cell.textContent = data.fact;
                })
                .catch(error => console.error('Помилка отримання факту про котів:', error));
        }


        document.addEventListener('DOMContentLoaded', () => {
            const tableRows = document.querySelectorAll('tbody tr');

            tableRows.forEach((row, index) => {
                fetchCatFactAndUpdateTable(index, 3);
            });
        });

    
        document.getElementById('showCatFacts').addEventListener('click', () => {
            const tableRows = document.querySelectorAll('tbody tr');

            tableRows.forEach((row, index) => {
                fetchCatFactAndUpdateTable(index, 3);
            });

            document.getElementById('catFacts').style.display = 'block';
        });