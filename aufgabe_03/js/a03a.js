/*
Aufgabe: A03a
Name: Selina Mazzaro
Matrikel: 254068
Datum: 09.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
In Zusammenarbeit mit Jana Burger und Jacqueliene Wagner.

Leider ist diese Aufgabe nicht vollst�ndig aufgrund fehlender Verst�ndis meinerseits.
Ich hab es auch nicht geschafft die Aufgabe in der Gruppe zul�sen und w�re deshalb sehr dankbar,
wenn wir diese Aufgabe im Praltikum nochmal Besprechen k�nnten.
*/
var A3;
(function (A3) {
    let zeile = 0;
    let a = 1; //Anzahl Reis
    document.addEventListener("DOMContentLoaded", function () {
        //Aussehen von Body bleibt immer gleich 
        let b = document.body.style;
        b.width = "450px";
        b.margin = "50px";
        b.backgroundColor = "#F7F7F7";
        let countField = 0;
        //Schachbrett
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                Div();
                if (i % 2 == j % 2) {
                    white(countField);
                }
                else {
                    black(countField);
                }
                countField++;
            }
        }
        //Aufgabe 3a
        for (let i = 0; i < 8; i++) {
            var total = 0;
            console.log("Schleife");
            let fields = document.getElementsByTagName("div");
            fields[i].addEventListener("click", function () {
                fields[i].classList.toggle("selected");
                console.log(fields[i]);
                let selected = document.getElementsByClassName("selected");
                console.log(selected);
                if (selected.length == 0) {
                    document.getElementById("inhalt").style.display = "none";
                }
                else {
                    document.getElementById("inhalt").style.display = "inline-block";
                }
                document.getElementById("inhalt").textContent = "Summe der K�rner - " + "Dezimal: " + total.toString() + ";" + " Hexadezimal: " + total.toString(16);
                for (let i = 0; i < selected.length; i++) {
                    total += Number(selected[i].textContent);
                }
            });
        }
        document.addEventListener("mousemove", function (Event) {
            document.getElementById("inhalt").style.left = (Event.clientX + 10) + "px";
            document.getElementById("inhalt").style.top = (Event.clientY + 10) + "px";
        });
    });
    //Divs erzeugen
    function Div() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.className = "DivBox";
        //Aussehen von Divs
        let s = div.style;
        s.borderStyle = "solid";
        s.borderColor = "#000000";
        s.borderWidth = "1px";
        s.width = "50px";
        s.height = "50px";
        s.display = "inline-block";
        s.cssFloat = "left";
        s.overflow = "auto";
        //Reis
        div.innerText = "" + a;
        a = a * 2;
    }
    //Schwarze Divs
    function black(_number) {
        let div = document.getElementsByTagName("div");
        let currentDiv = div[_number];
        if (div.length != 0) {
            currentDiv.style.backgroundColor = "black";
            currentDiv.style.color = "white";
            currentDiv.style.textAlign = "center";
        }
    }
    //Wei�e Divs
    function white(_number) {
        let div = document.getElementsByTagName("div");
        let currentDiv = div[_number];
        if (div.length != 0) {
            currentDiv.style.backgroundColor = "white";
            currentDiv.style.color = "black";
            currentDiv.style.textAlign = "center";
        }
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=a03a.js.map