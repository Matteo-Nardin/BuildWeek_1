let procedi = () => {
    let btn = document.querySelector("#btnPr"); //btnPr = pulsante procedi
    let checkbox = document.querySelector("#accetto");

    checkbox.addEventListener('change', () => {
        // Abilita o disabilita il pulsante in base allo stato della checkbox
        btn.disabled = !checkbox.checked;
    });

    btn.addEventListener('click', (evt) => {
        // Verifica nuovamente prima di procedere
        if (checkbox.checked) {
            window.location.href = "../henry.html";  //benchmark page
        } else {
            alert("Per favore accetta le condizioni per proseguire...");
        }
    });
}

procedi();
