/*
Aufgabe: A2
Name: Selina Mazzaro
Matrikel: 254068
Datum: 30.03.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function() {
    let n: number = 64; //Anzahl der Felder
    let i: number = 0;
    let x: number = 0; // gerade Zahlen sind weiﬂ, ungerade sind schwarz.
    let zeile: number = 0;
    let a: number = 1; //Anzahl Reis

    //Aussehen von Body bleibt immer gleich 
    let b = document.body.style;
    b.width = "450px";
    b.margin = "50px";
    b.backgroundColor = "#F7F7F7";

    //Divs erzeugen
    function Div(): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.className = "DivBox";
      
        
        //Aussehen von Divs
        let s: CSSStyleDeclaration = div.style;
        s.borderStyle = "solid";
        s.borderColor = "#000000";
        s.borderWidth = "1px";
        s.width = "50px";
        s.height = "50px";
        s.display = "inline-block";
        s.cssFloat = "left";
        s.overflow = "auto";
        //Reis
        div.innerText ="" + a;
        a = a*2;
    };

    //Weiﬂe Divs
    function white(): void {
        let div = document.getElementsByTagName("div");
        let divColor = div[x].getElementsByClassName("DivBox");
        if (div.length != 0) {
            div[x].style.backgroundColor = "white";
            div[x].style.color = "black";
            div[x].style.textAlign = "center";
            x++;
        };
    };

    //Schwarze Divs
    function black(): void {
        let div = document.getElementsByTagName("div");
        let divColor = div[x].getElementsByClassName("DivBox");
        if (div.length != 0) {
            div[x].style.backgroundColor = "black";
            div[x].style.color = "white";
            div[x].style.textAlign = "center";
            x++;
        };
    };

    //Schachbrett
    for (i; i < n; i++) {
        Div();
        if (x % 2 == zeile % 2) {
            white();
        }
        else {
            black();
        };
        if (x % 8 == 0) {
            zeile++;
        };
    };
});