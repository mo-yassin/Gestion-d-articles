let rIndex;

document.getElementById("ajoute-button").addEventListener("click", function () {

    let check = true;

    // NOM
    var nom = document.getElementById("nom").value;
    var regex = /^[a-z\s]{1,30}$/gi;
    if (nom === "") {
        document.getElementById("nom-out").innerHTML = "Nome is required.";
        document.getElementById("nom").style.border = "2px solid #FF3860";
        check = false;
    } else if (regex.test(nom)) {
        document.getElementById("nom").style.border = "2px solid #09C372";
        document.getElementById("nom-out").innerHTML = "";
    } else if (nom.length > 30) {
        document.getElementById("nom-out").innerHTML =
            "Le Nom ne doive pas dépasser 30 caractères.";
            check = false;
        document.getElementById("nom").style.border = "2px solid #FF3860";
    } else {
        document.getElementById("nom-out").innerHTML = "Nom Non Valid.";
        document.getElementById("nom").style.border = "2px solid #FF3860";
        check = false;
    }
    // ..

    // PRIX
    var prix = document.getElementById("prix").value;
    var regex = /^\d+,\d{1,2}$|^\d+$/gi;
    if (prix === "") {
        document.getElementById("prix-out").innerHTML = "Prix is required.";
        document.getElementById("prix").style.border = "2px solid #FF3860";
        check = false;
    } else if (regex.test(prix)) {
        document.getElementById("prix").style.border = "2px solid #09C372";
        document.getElementById("prix-out").innerHTML = "";
    } else {
        document.getElementById("prix-out").innerHTML = "Prix Non Valid.";
        document.getElementById("prix").style.border = "2px solid #FF3860";
        check = false;
    }
    // ..

    // MARQUE
    var marque = document.getElementById("marque");
    if (marque.value === "- Choisissez votre Marque -") {
        document.getElementById("marque").style.border = "2px solid #FF3860";
        document.getElementById("marqueout").innerHTML = "You must select a Marque.";
        check = false;
    } else {
        document.getElementById("marque").style.border = "2px solid #09C372";
        document.getElementById("marqueout").innerHTML = "";
    }
    // ..

    // PRODUCTION DATE
    var date = document.getElementById("production").value;
    if (date.length < 1) {
        document.getElementById("productionout").innerHTML ="Production date is required.";
        document.getElementById("production").style.border ="2px solid #FF3860";
        check = false;
    } else {
        document.getElementById("productionout").innerHTML = "";
        document.getElementById("production").style.border ="2px solid #09C372";
    }
    // ..

    // TYPE
    var type = document.getElementById("type");
    if (type.value === "- Choisissez votre Type -") {
        document.getElementById("type").style.border = "2px solid #FF3860";
        document.getElementById("typeout").innerHTML = "You must select a Marque.";
        check = false;
    } else {
        document.getElementById("type").style.border = "2px solid #09C372";
        document.getElementById("typeout").innerHTML = "";
    }
    // ..

    // PROMOTION
    let promo;
    if (document.getElementById("oui").checked) {
        document.getElementById("oui-label").style.color = "#09c372";
        document.getElementById("non-label").style.color = "black";
        document.getElementById("promotion").innerHTML = "";
        promo = "Oui";
    } else if (document.getElementById("non").checked) {
        document.getElementById("non-label").style.color = "#09c372";
        document.getElementById("oui-label").style.color = "black";
        document.getElementById("promotion").innerHTML = "";
        promo = "Non"
    } else {
        document.getElementById("promotion").innerHTML ="You must select Promotion";
        check = false;
    }
    // ..

    // AJOUTER
    if(check===true){
        const tbody = document.querySelector("tbody");
    tbody.innerHTML += `
        <tr>
            <td>${nom}</td>
            <td>${marque.value}</td>
            <td>${prix}</td>
            <td>${production.value}</td>
            <td>${type.value}</td>
            <td>${promo}</td>
            <td>
                <button onclick="MODIFIER()" id="edite">Editer</button>
                <button class="delete">Supprimer</button>
            </td>
        </tr>
    `;
    document.querySelector("form").reset();
    }
});
    // ..

    // SUPPRIMER
const table = document.querySelector("table");
function onDeleteRow(e) {
    if (!e.target.classList.contains("delete")) {
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
}
table.addEventListener("click", onDeleteRow);
    // ..

    // MODIFIER
function MODIFIER(){
    let table = document.getElementById('table'); 
    for (let i = 0 ; i<=table.rows.length ; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            console.log(rIndex)
            document.getElementById('nom').value = this.cells[0].innerHTML;
            document.getElementById('marque').value = this.cells[1].innerHTML;
            document.getElementById('prix').value = this.cells[2].innerHTML;
            document.getElementById('production').value = this.cells[3].innerHTML;
            document.getElementById('type').value = this.cells[4].innerHTML;
            if (this.cells[5].innerHTML=='Oui') {
                document.getElementById('oui').setAttribute('checked','')
            }else{
                document.getElementById('non').setAttribute('checked','')
            }
        };
        document.getElementById('modifier-button').style.visibility = 'visible';
        document.getElementById('ajoute-button').style.visibility = 'hidden';
    }
}
    // ..

    // NEW VALUES
document.getElementById("modifier-button").addEventListener("click", function () {
    document.getElementById('modifier-button').style.visibility = 'hidden';
    document.getElementById('ajoute-button').style.visibility = 'visible';
    let table = document.getElementById('table'); 
    table.rows[rIndex].cells[0].innerHTML = document.getElementById('nom').value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById('marque').value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById('prix').value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById('production').value;
    table.rows[rIndex].cells[4].innerHTML =document.getElementById('type').value;                               
    table.rows[rIndex].cells[5].innerHTML = document.querySelector('[type=radio]:checked').value;
});