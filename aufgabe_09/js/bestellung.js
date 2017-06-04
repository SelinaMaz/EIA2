var Form;
(function (Form) {
    window.addEventListener("load", init);
    let sorten = ["Apfel", "Butterkaramel", "Champagner", "Erdbeere", "Haselnuss", "Himbeere",
        "Himbeere-Rosmarin", "Holunder-Basilikum", "Joguhrt", "Kaffee", "Mango", "Schokolade", "Stracciatella",
        "Vanille", "Walnuss"];
    let eissorten;
    let zusatz;
    let behaelter;
    let vorschau;
    let bestaetigung;
    let selectEis = [];
    let zusatzArray = ["Bunte Streusel", "Schokoso�e", "Sahne", "Smarties"];
    let behaelterArray = ["Waffel", "Becher"];
    let inputZusatz = [];
    let inputBehaelter = [];
    function init(_event) {
        vorschau = document.getElementById("Vorschau");
        eissorten = document.getElementById("Eissorten");
        behaelter = document.getElementById("Behaelter");
        zusatz = document.getElementById("Zusatz");
        bestaetigung = document.getElementById("bestaetigung");
        createAuswahl();
        //        eissorten.addEventListener("change", change);
        //        zusatz.addEventListener("change", change);
        //        behaelter.addEventListener("change", change);
        bestaetigung.addEventListener("click", saveOrder);
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
        //Adresse fehlt noch
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
                korrektur.push;
            alert(korrektur.join(""));
        }
        else {
            alert("Ihre Angaben sind korrekt");
            location.reload();
        }
    }
    function createAuswahl() {
        for (let i = 0; i < behaelterArray.length; i++) {
            createBehaelterRadio(behaelterArray[i]);
        }
        for (let i = 0; i < zusatzArray.length; i++) {
            createZusatzRadio(zusatzArray[i]);
        }
        createSelect();
    }
    function createSelect() {
        let label = document.createElement("label");
        let select = document.createElement("select");
        let option = document.createElement("option");
        let eis = document.createTextNode("Apfel");
        label.innerText = "Eissorten";
        label.appendChild(select);
        select.setAttribute("id", "mySelect");
        option.setAttribute("value", "eis");
        option.appendChild(eis);
        eissorten.appendChild(label);
        selectEis.push(select);
        document.getElementById("mySelect").appendChild(eis);
    }
    function createBehaelterRadio(_behaelter) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _behaelter;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "radio";
        input.name = "behaelter";
        input.required = true;
        label.id = _behaelter;
        behaelter.appendChild(label);
        inputZusatz.push(input);
    }
    function createZusatzRadio(_zusatz) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _zusatz;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "radio";
        input.name = "zusatz";
        input.required = true;
        label.id = _zusatz;
        zusatz.appendChild(label);
        inputZusatz.push(input);
    }
})(Form || (Form = {}));
//# sourceMappingURL=bestellung.js.map