namespace Form {

    let sorten: string[] = ["Apfel", "Butterkaramel", "Champagner", "Erdbeere", "Haselnuss", "Himbeere",
        "Himbeere-Rosmarin", "Holunder-Basilikum", "Joguhrt", "Kaffee", "Mango", "Schokolade", "Stracciatella",
        "Vanille", "Walnuss"];

    let eissorten: HTMLElement;
    let zusatz: HTMLElement;
    let behaelter: HTMLElement;
    let warenkorb: HTMLElement;
    let bestaetigung: HTMLElement;

    let selectEis: HTMLSelectElement[] = [];
    let zusatzArray: string[] = ["Bunte Streusel", "Schokosoﬂe", "Sahne", "Smarties"];
    let behaelterArray: string[] = ["Waffel", "Becher"];
    let inputZusatz: HTMLInputElement[] = [];
    let inputBehaelter: HTMLInputElement[] = [];

    function Warenkorb(_event: Event): void {
        console.log(_event);
        let bestellung: HTMLElement = document.getElementById("Kasse");
        bestellung.innerText = "";
        for (let i: number = 0; i < selectEis.length; i++) {
            if (parseInt(selectEis[i].value) > 0) {
                bestellung.innerText += + sorten[i] + " " + ": " + (parseInt(selectEis[i].value) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < inputBehaelter.length; i++) {
            if (inputBehaelter[i].checked) {
                bestellung.innerText += behaelterArray[i] + " " + "\n";
            }
        }
        for (let i: number = 0; i < inputZusatz.length; i++) {
            if (inputZusatz[i].checked) {
                bestellung.innerText += zusatzArray[i] + " " + "\n";
            }
        }
    }

    function Summe(_event: Event): void {
        let summe: number = 0;
        for (let i: number = 0; i < selectEis.length; i++) {
            summe += parseInt(selectEis[i].value);
        }
        for (let i: number = 0; i < inputZusatz.length; i++) {
            if (inputZusatz[i].checked)
                summe += 0.5;
        }
        document.getElementById("Summe").innerText = "Summe:" + " " + summe.toString() + "‚Ç¨";
    }
}