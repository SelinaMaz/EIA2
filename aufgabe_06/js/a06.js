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
        let _sex = parseInt(data[4]) != 0 && parseInt(data[4]) != 1;
        let _comment;
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
            return "Geschlecht bitte als 0 f�r w oder 1 f�r m eingeben.";
        }
        let check = {
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
    function queryData(_matrikel) {
        return "Hier fehlt noch der richtige Code...";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=a06.js.map