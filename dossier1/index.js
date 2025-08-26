// Sélectionner le bouton et le message
const bouton = document.getElementById("monBouton");
const message = document.getElementById("message");

// Ajouter un événement au clic
bouton.addEventListener("click", () => {
  message.textContent = "Bravo 🎉 Tu as cliqué sur le bouton !";
  message.style.color = "blue";
});
