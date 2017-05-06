var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, \nName, \nVorname, \nAlter, \nGeschlecht 0 = m oder 1 = w und \nKommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let data = _input.split(",");
        let _matrikel = (parseInt(data[0]));
        let _name = data[1];
        let _firstname = data[2];
        let _age = (parseInt(data[3]));
        let _comment = data[5];
        if (data.length < 4) {
            return "Angaben nicht vollstaendig!";
        }
        if (isNaN(_matrikel)) {
            return "Matrikelnummer ist keine Nummer";
        }
        if (isNaN(_age)) {
            return "Das Alter ist keine Nummer";
        }
        if (parseInt(data[4]) != 0 && parseInt(data[4]) != 1) {
            return "Geschlecht bitte als 0 f�r w oder 1 f�r m eingeben.";
        }
        let check = {
            matrikel: _matrikel,
            name: _name,
            firstname: _firstname,
            age: _age,
            sex: parseInt(data[4]) == 0,
            comment: _comment
        };
        students.push(check);
        let stringSex = check.sex ? "m" : "w";
        return "Bitte ueberpruefen Sie Ihre Daten nach der Richtigkeit und bestaetigen Sie mit OK:\nMatrikelnummer: " + check.matrikel + "\nName: " + check.name + "\nVorname: " + check.firstname + "\nAlter: " + check.age + "\nGeschlecht: " + stringSex + "\nKommentar: " + check.comment;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let stringSex = students[i].sex ? "m" : "w";
                let s = students[i];
                return "Unter Ihrer Matrikelnummer sind Folgende Daten gespeichert: \nMatrikelnummer: " + s.matrikel + "\nName: " + s.name + "\nVorname: " + s.firstname + "\nAlter: " + s.age + "\nGeschlecht: " + stringSex + "\nKommentar: " + s.comment;
            }
        }
        return "Ihre Matrikelnummer ist nicht registriert. Bitte tragen Sie sich vor der Abfrage ein.";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=a06b.js.map