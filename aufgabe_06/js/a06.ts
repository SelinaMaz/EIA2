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
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
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

        if (data.length < 4) {
            return "Angaben nicht vollständig!";
        }

        if (isNaN(parseInt(data[0]))) {
            return "Matrikelnummer ist keine Nummer";
        }


        if (data[1]) {
            return "Matrikelnummer ist keine Nummer";
        }

        let sexBoolean: boolean = false;

        if (parseInt(data[4]) == 0) {


        }
        return "Hier fehlt noch der richtige Code...";
    }
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }
}