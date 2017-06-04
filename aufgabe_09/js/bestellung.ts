/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 04.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Form {
    window.addEventListener("load", init);

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


    function init(_event: Event): void {
        warenkorb = document.getElementById("Warenkorb");
        eissorten = document.getElementById("Eissorten");
        behaelter = document.getElementById("Behaelter");
        zusatz = document.getElementById("Zusatz");
        bestaetigung = document.getElementById("bestaetigung");

        createAuswahl();
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", Warenkorb);
            fieldset.addEventListener("change", Summe);
        }
        bestaetigung.addEventListener("click", saveOrder);
    }

    function saveOrder(_event: Event): void {
        let korrektur: string[] = ["Bitte ¸berpr¸fen und erg‰nzen Sie folgende Eingaben \n"];
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
            korrektur.push("Beh‰lter");

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
        createSelect();
        for (let i: number = 0; i < behaelterArray.length; i++) {
            createBehaelterRadio(behaelterArray[i]);
        }
        for (let i: number = 0; i < zusatzArray.length; i++) {
            createZusatzRadio(zusatzArray[i]);
        }
        createStepper();
    }

    function createSelect(): void {
        let select: HTMLSelectElement = document.createElement("select");
        for (let i: number = 0; i < sorten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.text = sorten[i];
            option.value = sorten[i];
            select.appendChild(option);
        }
        document.getElementById("Eissorten").appendChild(select);
    }

    function createStepper(): void {
        let input: HTMLInputElement = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "10";
        input.value = "0";
        document.getElementById("Anzahl").appendChild(input);
    }

    function createBehaelterRadio(_behaelter: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.name = "behaelter";
        input.required = true;
        label.id = _behaelter;
        behaelter.appendChild(label);
        inputBehaelter.push(input);
    }

    function createZusatzRadio(_zusatz: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _zusatz;
        label.appendChild(input);
        input.type = "radio";
        input.name = "zusatz";
        input.required = true;
        label.id = _zusatz;
        zusatz.appendChild(label);
        inputZusatz.push(input);
    }

    function Warenkorb(_event: Event): void {
        console.log(_event);
        let bestellung: HTMLElement = document.getElementById("vorschau");
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
        document.getElementById("Summe").innerText = "Summe:" + " " + summe.toString() + "Ä";
    }
}







