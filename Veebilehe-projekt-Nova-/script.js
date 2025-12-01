/* 
  Autor: Oliver Proos
  Kirjeldus: Näitab juhuslikku astronoomiafakti nupu vajutamisel.
  Kood on kirjutatud ise.
*/

// Funktsioon, mis kuvab juhusliku astronoomiafakti
function naitaFakti() {
  const faktid = [
    "Päike on umbes 4,6 miljardit aastat vana.",
    "Veenus on kõige kuumem planeet Päikesesüsteemis.",
    "Komeedid koosnevad jääst, tolmust ja kivist.",
    "Neptuun on Päikesesüsteemi kõige tuulisem planeet.",
    "Virmalised tekivad, kui Päikeseosakesed põrkuvad Maa atmosfääriga.",
    "Täiskuu on alati vastassuunas Päikesele.",
    "Suurim teadaolev täht on UY Scuti, mis on üle 1700 korda suurem kui Päike.",
    "Sinine kuu on teine täiskuu ühes kalendrikuus, mis juhtub keskmiselt iga 2-3 aasta tagant!",
    "Superkuu on nähtus, kui Kuu on täiskuu (või noorkuu) ajal oma orbiidil Maale kõige lähemal."
  ];

  // Valime juhusliku fakti
  const indeks = Math.floor(Math.random() * faktid.length);
  const juhuslikFakt = faktid[indeks];

  // Kuvame selle HTML-s
  document.getElementById("faktTekst").textContent = juhuslikFakt;
}

// Kui vajutatakse nuppu, käivitatakse funktsioon
document.getElementById("faktNupp").addEventListener("click", naitaFakti);
