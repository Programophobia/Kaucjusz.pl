document.getElementById("calcBtn").addEventListener("click", calculate);

async function calculate() {
  const dream = document.getElementById("dreamInput").value;
  const resultDiv = document.getElementById("result");

  if (!dream) {
    resultDiv.innerHTML = "Wpisz marzenie, mordko!";
    return;
  }

  resultDiv.innerHTML = "Kaucjusz liczy...";

  const apiKey = "YOUR_SERPAPI_KEY";

  const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(dream)}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.shopping_results || data.shopping_results.length === 0) {
      resultDiv.innerHTML = "Kaucjusz nie znalazł ceny dla tego marzenia.";
      return;
    }

    const item = data.shopping_results[0];

    // różne możliwe pola ceny
    const price =
      item.extracted_price ||
      parseFloat(item.price?.replace(",", ".") || 0) ||
      item.product_price ||
      item.unit_price ||
      null;

    if (!price) {
      resultDiv.innerHTML = "Kaucjusz nie znalazł ceny (brak danych).";
      return;
    }

    const bottleValue = 0.5; // 50 groszy za butelkę
    const bottles = Math.round(price / bottleValue);

    resultDiv.innerHTML = `
      <strong>Kaucjusz mówi:</strong><br><br>
      Marzenie: ${dream}<br>
      Cena: ${price} zł<br><br>
      To daje około <strong>${bottles} butelek</strong>.
    `;
  } catch (error) {
    resultDiv.innerHTML = "Ups! Coś poszło nie tak.";
  }
}
