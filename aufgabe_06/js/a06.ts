namespace StudiVZ {


    interface StudentData {
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        matrikel: number;
        comment: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, \nName, \nVorname, \nAlter, \nGeschlecht 0 = m oder 1 = w und \nKommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let data: string[] = _input.split(",");

        let _matrikel: number = (parseInt(data[0]));
        let _name: string = data[1];
        let _firstname: string = data[2];
        let _age: number = (parseInt(data[3]));
        let _sex: boolean = parseInt(data[4]) != 0 && parseInt(data[4]) != 1;
        let _comment: string;

        if (data.length < 4) {
            return "Angaben nicht vollstaendig!";
        }
        if (isNaN(_matrikel)) {
            return "Matrikelnummer ist keine Nummer";
        }
        if (isNaN(_age)) {
            return "Das Alter ist keine Nummer";
        }

        if (_sex) {
            return "Geschlecht bitte als 0 für w oder 1 für m eingeben.";
        }

        let check: StudentData = {
            matrikel: _matrikel,
            name: _name,
            firstname: _firstname,
            age: _age,
            sex: _sex,
            comment: _comment
        };
        
        students.push(check);
        confirm("Bitte ueberpruefen Sie Ihre Daten nach der Richtigkeit und bestaetigen Sie mit OK:\nMatrikelnummer: " + check.matrikel + "\nName: " + check.name + "\nVorname: " + check.firstname + "\nAlter: " + check.age + "\nGeschlecht: " + check.sex + "\nKommentar: " + check.comment);
    }



    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }

}