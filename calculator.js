document.addEventListener("DOMContentLoaded", function () {
  const PRET_PER_CAMERA = 25;

  document.getElementById("calculeaza").addEventListener("click", function (e) {
    e.preventDefault();

    const numarExact = parseInt(document.getElementById("specificareCamere").value);
    const rezultat = document.getElementById("rezultat");
    const priceBreakdown = document.getElementById("priceBreakdown");

    if (isNaN(numarExact) || numarExact < 1) {
      alert("Introduceți un număr valid de camere.");
      return;
    }

    const total = numarExact * PRET_PER_CAMERA;
    rezultat.textContent = `Preț mentenanță: ${total} €/lună`;
    priceBreakdown.textContent = `${numarExact} camere × ${PRET_PER_CAMERA}€ = ${total}€`;
  });
});
