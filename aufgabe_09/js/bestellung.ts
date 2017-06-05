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
    let check: HTMLElement;
    let abschicken: HTMLElement;

    let sEis: HTMLOptionElement[] = [];
    let selectEis: HTMLSelectElement[] = [];
    let zusatzArray: string[] = ["Bunte Streusel", "Schokososse", "Sahne", "Smarties"];
    let behaelterArray: string[] = ["Waffel", "Becher"];
    let inputZusatz: HTMLInputElement[] = [];
    let inputBehaelter: HTMLInputElement[] = [];
    let inputStepper: HTMLInputElement[] = [];
    let selectListe: string[] = [];


    function init(_event: Event): void {
        warenkorb = document.getElementById("Warenkorb");
        eissorten = document.getElementById("Eissorten");
        behaelter = document.getElementById("Behaelter");
        zusatz = document.getElementById("Zusatz");
        check = document.getElementById("check");
        abschicken = document.getElementById("abschicken");

        createAuswahl();
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", Warenkorb);
            fieldset.addEventListener("change", Summe);
        }
        check.addEventListener("click", checkOrder);
        //        document.getElementById("lieferung").addEventListener("click", Lieferung);
        abschicken.addEventListener("click", BestellungSenden);
        console.log(selectListe);
        console.log(sEis);
        console.log(inputStepper);
    }

    function checkOrder(_event: Event): void {
        let korrektur: string[] = ["Bitte überprüfen und ergänzen Sie folgende Eingaben \n"];
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
        let adresse: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("Adresse");
        let telefon: HTMLInputElement = <HTMLInputElement>document.getElementById("Telefon");
        let lieferart: HTMLInputElement = <HTMLInputElement>document.getElementById("Lieferart");
        let zahlungsart: HTMLInputElement = <HTMLInputElement>document.getElementById("Zahlungsart");

        if (name.validity.valid == false)
            korrektur.push("vorname \n");
        if (vorname.validity.valid == false)
            korrektur.push("Nachname \n");
        if (adresse.validity.valid == false)
            korrektur.push("Adresse \n");
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
                korrektur.push("");
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
            selectListe.push(sorten[i]);
            sEis.push(option);
        }
        document.getElementById("Eissorten").appendChild(select);
    }

    function createStepper(): void {
        let stepper: HTMLInputElement = document.createElement("input");
        stepper.type = "number";
        stepper.min = "0";
        stepper.max = "10";
        stepper.value = "0";
        stepper.step = "1";
        document.getElementById("Anzahl").appendChild(stepper);
        inputStepper.push(stepper);
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
        let bestellung: HTMLElement = document.getElementById("vorschau");
        bestellung.innerText = "";

        for (let i: number = 0; i < sEis.length; i++) {
            if (parseInt(sEis[i].value) > 0) {
                bestellung.innerText += sEis[i].text + "\n";
            }
        }

        //        for (let i: number = 0; i < selectListe.length; i++) {
        //            if (selectListe[i].length > 0) {
        //                bestellung.innerText +=  selectListe[i] + " " + "\n";
        //            }
        //        }

        for (let i: number = 0; i < inputBehaelter.length; i++) {
            if (inputBehaelter[i].checked) {
                bestellung.innerText += behaelterArray[i] + "\n";
            }
        }
        for (let i: number = 0; i < inputZusatz.length; i++) {
            if (inputZusatz[i].checked) {
                bestellung.innerText += zusatzArray[i] + "\n";
            }
        }
    }

    //    let lieferung = event.bubbles;
    //    let l: number = 0;
    //
    //    function Lieferung(_event: Event): void {
    //        if (lieferung == true) {
    //            l = 1;
    //        }
    //    }

    function Summe(_event: Event): void {
        let summe: number = 0;
        for (let i: number = 0; i < inputStepper.length; i++) {
            if (inputStepper[i].checked)
                summe += parseInt(inputStepper[i].value);
        }
        for (let i: number = 0; i < inputZusatz.length; i++) {
            if (inputZusatz[i].checked)
                summe += 0.5;
        }

        //        if (l = 1) {
        //            summe += 1;
        //        }
        document.getElementById("Summe").innerText = "Summe:" + " " + summe.toString() + "â‚¬";
        }
    
      function BestellungSenden(_event: Event): void {
         alert("Vielen Dank für deine Besstellung. \nLuigi wuenscht schonmal Guten Appetit :)");
      }  
}
