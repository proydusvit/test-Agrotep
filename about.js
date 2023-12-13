document.addEventListener("DOMContentLoaded", () => {
    
  const showCatFactsButton = document.getElementById("showCatFacts");
  const catFactsDiv = document.getElementById("catFacts");
    const catFactParagraph = document.getElementById("catFact");
    
  let intervalId;

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then(response => response.json())
      .then(data => {
        catFactParagraph.textContent = data.fact;
        catFactsDiv.style.display = "block";
      })
      .catch(error => {
        console.error("Помилка отримання даних про котиків:", error);
      });
  };

  const toggleCatFacts = () => {
    if (catFactsDiv.style.display === "none") {
      fetchCatFact();
      intervalId = setInterval(fetchCatFact, 3000);
    } else {
      clearInterval(intervalId);
      catFactsDiv.style.display = "none";
    }
  };

  showCatFactsButton.addEventListener("click", toggleCatFacts);
});
