/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 04.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Form;
(function (Form) {
    window.addEventListener("load", init);
    let sorten = ["Apfel", "Butterkaramel", "Champagner", "Erdbeere", "Haselnuss", "Himbeere",
        "Himbeere-Rosmarin", "Holunder-Basilikum", "Joguhrt", "Kaffee", "Mango", "Schokolade", "Stracciatella",
        "Vanille", "Walnuss"];
    let eissorten;
    let zusatz;
    let behaelter;
    let warenkorb;
    let bestaetigung;
    let selectEis = [];
    let zusatzArray = ["Bunte Streusel", "Schokososse", "Sahne", "Smarties"];
    let behaelterArray = ["Waffel", "Becher"];
    let inputZusatz = [];
    let inputBehaelter = [];
    function init(_event) {
        warenkorb = document.getElementById("Warenkorb");
        eissorten = document.getElementById("Eissorten");
        behaelter = document.getElementById("Behaelter");
        zusatz = document.getElementById("Zusatz");
        bestaetigung = document.getElementById("bestaetigung");
        createAuswahl();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", Warenkorb);
            fieldset.addEventListener("change", Summe);
        }
        bestaetigung.addEventListener("click", saveOrder);
        console.log(selectEis.values);
    }
    function saveOrder(_event) {
        let korrektur = ["Bitte �berpr�fen und erg�nzen Sie folgende Eingaben \n"];
        let vorname = document.getElementById("Name");
        let nachname = document.getElementById("Nachname");
        let adresse = document.getElementById("Adresse");
        let telefon = document.getElementById("Telefon");
        let lieferart = document.getElementById("Lieferart");
        let zahlungsart = document.getElementById("Zahlungsart");
        if (vorname.validity.valid == false)
            korrektur.push("vorname \n");
        if (nachname.validity.valid == false)
            korrektur.push("Nachname \n");
        if (adresse.validity.valid == false)
            korrektur.push("Adresse \n");
        if (telefon.validity.valid == false)
            korrektur.push("Telefon \n");
        if (lieferart.value != "lieferung" && lieferart.value != "abholung")
            korrektur.push("Lieferart \n");
        if (zahlungsart.value != "aufRechnung" && "kreditkarte")
            korrektur.push("Zahlungsart \n");
        let eiskugeln = 0;
        let behaelter = 0;
        for (let i = 0; i < selectEis.length; i++) {
            if (parseInt(selectEis[i].value) > 0)
                eiskugeln += 1;
        }
        if (eiskugeln == 0)
            korrektur.push("Eissorten\n");
        for (let i = 0; i < inputBehaelter.length; i++) {
            if (inputBehaelter[i].checked)
                behaelter += 1;
        }
        if (behaelter == 0)
            korrektur.push("Beh�lter");
        if (korrektur.length > 1) {
            for (let i = 0; i < korrektur.length; i++)
                korrektur.push("");
            alert(korrektur.join(""));
        }
        else {
            alert("Ihre Angaben sind korrekt");
            location.reload();
        }
    }
    function createAuswahl() {
        createSelect();
        for (let i = 0; i < behaelterArray.length; i++) {
            createBehaelterRadio(behaelterArray[i]);
        }
        for (let i = 0; i < zusatzArray.length; i++) {
            createZusatzRadio(zusatzArray[i]);
        }
        createStepper();
    }
    function createSelect() {
        let select = document.createElement("select");
        for (let i = 0; i < sorten.length; i++) {
            let option = document.createElement("option");
            option.text = sorten[i];
            option.value = sorten[i];
            select.appendChild(option);
        }
        document.getElementById("Eissorten").appendChild(select);
    }
    function createStepper() {
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "10";
        input.value = "0";
        document.getElementById("Anzahl").appendChild(input);
    }
    function createBehaelterRadio(_behaelter) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.name = "behaelter";
        input.required = true;
        label.id = _behaelter;
        behaelter.appendChild(label);
        inputBehaelter.push(input);
    }
    function createZusatzRadio(_zusatz) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _zusatz;
        label.appendChild(input);
        input.type = "radio";
        input.name = "zusatz";
        input.required = true;
        label.id = _zusatz;
        zusatz.appendChild(label);
        inputZusatz.push(input);
    }
    function Warenkorb(_event) {
        console.log(_event);
        let bestellung = document.getElementById("vorschau");
        bestellung.innerText = "";
        for (let i = 0; i < selectEis.length; i++) {
            if (parseInt(selectEis[i].value) > 0) {
                bestellung.innerText += +sorten[i] + " " + ": " + (parseInt(selectEis[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < inputBehaelter.length; i++) {
            if (inputBehaelter[i].checked) {
                bestellung.innerText += behaelterArray[i] + " " + "\n";
            }
        }
        for (let i = 0; i < inputZusatz.length; i++) {
            if (inputZusatz[i].checked) {
                bestellung.innerText += zusatzArray[i] + " " + "\n";
            }
        }
    }
    function Summe(_event) {
        let summe = 0;
        for (let i = 0; i < selectEis.length; i++) {
            summe += parseInt(selectEis[i].value);
        }
        //        for (let i: number = 0; i < inputBehaelter.length; i++) {
        //            if (inputBehaelter[i].checked)
        //                summe += 0.5;
        //        }
        for (let i = 0; i < inputZusatz.length; i++) {
            if (inputZusatz[i].checked)
                summe += 0.5;
        }
        document.getElementById("Summe").innerText = "Summe:" + " " + summe.toString() + "€";
    }
})(Form || (Form = {}));
//# sourceMappingURL=bestellung.js.map