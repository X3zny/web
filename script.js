document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-audio");
  const popup = document.getElementById("popup");
  const audioYes = document.getElementById("audio-yes");
  const audioNo = document.getElementById("audio-no");

  // Pokaż popup po załadowaniu strony
  popup.style.display = "block";

  // Obsługuje kliknięcie przycisku "Tak"
  audioYes.addEventListener("click", () => {
    audio.play().catch((err) => console.error("Błąd odtwarzania audio:", err));
    popup.style.display = "none"; // Ukrywamy popup po wyborze
  });

  // Obsługuje kliknięcie przycisku "Nie"
  audioNo.addEventListener("click", () => {
    audio.pause(); // Pauzujemy audio
    popup.style.display = "none"; // Ukrywamy popup po wyborze
  });

  // Zmiana tytułu strony w cyklu
  const titles = ["x", "x3", "x3z", "x3zn", "x3zny", "x3zn", "x3z", "x3", "x"];
  let titleIndex = 0;

  function changeTitle() {
    document.title = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
  }

  setInterval(changeTitle, 500); // Zmieniaj co 500ms
});
