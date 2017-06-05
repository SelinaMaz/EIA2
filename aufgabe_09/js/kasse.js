var Form;
(function (Form) {
    let sorten = ["Apfel", "Butterkaramel", "Champagner", "Erdbeere", "Haselnuss", "Himbeere",
        "Himbeere-Rosmarin", "Holunder-Basilikum", "Joguhrt", "Kaffee", "Mango", "Schokolade", "Stracciatella",
        "Vanille", "Walnuss"];
    let eissorten;
    let zusatz;
    let behaelter;
    let warenkorb;
    let bestaetigung;
    let selectEis = [];
    let zusatzArray = ["Bunte Streusel", "Schokoso�e", "Sahne", "Smarties"];
    let behaelterArray = ["Waffel", "Becher"];
    let inputZusatz = [];
    let inputBehaelter = [];
    function Warenkorb(_event) {
        console.log(_event);
        let bestellung = document.getElementById("Kasse");
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
        for (let i = 0; i < inputZusatz.length; i++) {
            if (inputZusatz[i].checked)
                summe += 0.5;
        }
        document.getElementById("Summe").innerText = "Summe:" + " " + summe.toString() + "€";
    }
})(Form || (Form = {}));
//# sourceMappingURL=kasse.js.map