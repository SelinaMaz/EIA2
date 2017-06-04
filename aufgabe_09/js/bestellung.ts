namespace Form {
    window.addEventListener("load", init);

    let sorten: string[] = ["Apfel", "Butterkaramel", "Champagner", "Erdbeere", "Haselnuss", "Himbeere",
        "Himbeere-Rosmarin", "Holunder-Basilikum", "Joguhrt", "Kaffee", "Mango", "Schokolade", "Stracciatella",
        "Vanille", "Walnuss"];

    let eissorten: HTMLElement;
    let zusatz: HTMLElement;
    let behaelter: HTMLElement;
    let vorschau: HTMLElement;
    let bestaetigung: HTMLElement;

    let selectEis: HTMLSelectElement[] = [];
    let zusatzArray: string[] = ["Bunte Streusel", "Schokosoße", "Sahne", "Smarties"];
    let behaelterArray: string[] = ["Waffel", "Becher"];

    let inputZusatz: HTMLInputElement[] = [];
    let inputBehaelter: HTMLInputElement[] = [];


    function init(_event: Event): void {
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

    function saveOrder(_event: Event): void {
        let korrektur: string[] = ["Bitte überprüfen und ergänzen Sie folgende Eingaben \n"];
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
        let nachname: HTMLInputElement = <HTMLInputElement>document.getElementById("Nachname");
        let adresse: HTMLElement = <HTMLElement>document.getElementById("Adresse");
        let telefon: HTMLInputElement = <HTMLInputElement>document.getElementById("Telefon");
        let lieferart: HTMLInputElement = <HTMLInputElement>document.getElementById("Lieferart");
        let zahlungsart: HTMLInputElement = <HTMLInputElement>document.getElementById("Zahlungsart");

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

        let eiskugeln: number = 0;
        let behaelter: number = 0;

        for (let i: number = 0; i < selectEis.length; i++) {
            if (parseInt(selectEis[i].value) > 0)
                eiskugeln += 1;
        }
        if (eiskugeln == 0)
            korrektur.push("Eissorten\n");
        for (let i: number = 0; i < inputBehaelter.length; i++) {
            if (inputBehaelter[i].checked)
                behaelter += 1;
        }
        if (behaelter == 0)
            korrektur.push("Behälter");

        if (korrektur.length > 1) {
            for (let i: number = 0; i < korrektur.length; i++)
                korrektur.push
            alert(korrektur.join(""));
        }
        else {
            alert("Ihre Angaben sind korrekt");
            location.reload();
        }
    }

    function createAuswahl(): void {
        createSelect(sorten[0]);

        for (let i: number = 0; i < behaelterArray.length; i++) {
            createBehaelterRadio(behaelterArray[i]);
        }
        for (let i: number = 0; i < zusatzArray.length; i++) {
            createZusatzRadio(zusatzArray[i]);
        }
    }
    
    
}