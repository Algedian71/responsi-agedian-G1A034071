document.getElementById('personaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('inputNama').value;
    const hobi = document.getElementById('inputHobi').value;
    const angka = parseInt(document.getElementById('inputAngka').value);
    
    let persona = "";

    if (hobi === "music") {
        persona = angka > 5 ? "The Manchester Messiah" : "The Britpop Poet";
    } else if (hobi === "coding") {
        persona = angka % 2 === 0 ? "The Cyber-Rockstar" : "The Analog Maverick";
    } else if (hobi === "gaming") {
        persona = angka > 7 ? "The Legendary Strategist" : "The Speedrunner";
    } else if (hobi === "design") {
        persona = angka > 5 ? "The Graphic Novel Legend" : "The Aesthetic Rebel";
    } else {
        persona = "The Mad Fer It Creative";
    }

    const resultDiv = document.getElementById('resultDisplay');
    const resultText = document.getElementById('personaResult');
    
    resultText.innerText = `${persona}, ${nama}!`;
    resultDiv.classList.remove('hidden');
    
    this.reset();
});