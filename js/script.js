document.getElementById("calcBtn").addEventListener("click", () => {
    const dream = document.getElementById("dreamInput").value.trim();

    if (!dream) {
        showResult("Wpisz marzenie!");
        return;
    }

    // MOCK — sztuczne ceny dla przykładowych marzeń
    const mockPrices = {
        "audi tt": 120000,
        "dom": 600000,
        "laptop": 3500,
        "iphone 15": 4500,
        "telewizor samsung": 2800,
        "rower": 1500
    };

    // Jeśli marzenie jest w mocku → używamy ceny
    let price = mockPrices[dream.toLowerCase()];

    // Jeśli nie ma → generujemy losową cenę (żeby zawsze działało)
    if (!price) {
        price = Math.floor(Math.random() * 5000) + 500;
    }

    const depositValue = 0.5;
    const bottlesNeeded = Math.ceil(price / depositValue);

    showResult(
        `Marzenie: <b>${dream}</b><br>
         Cena: <b>${price} zł</b><br>
         Kaucja: <b>${depositValue} zł</b><br><br>
         Potrzebujesz <b>${bottlesNeeded}</b> butelek!`
    );
});

function showResult(text) {
    const box = document.getElementById("result");

    box.innerHTML = text;
}
