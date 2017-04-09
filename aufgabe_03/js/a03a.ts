/*
Aufgabe: A03a
Name: Selina Mazzaro
Matrikel: 254068
Datum: 01.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
In Zusammenarbeit mit Jana Burger und Jacqueliene Wagner.
*/

let zeile: number = 0;
let a: number = 1; //Anzahl Reis

document.addEventListener("DOMContentLoaded", function(): void {

    //Aussehen von Body bleibt immer gleich 
    let b: CSSStyleDeclaration = document.body.style;
    b.width = "450px";
    b.margin = "50px";
    b.backgroundColor = "#F7F7F7";

    let countField: number = 0;

    //Schachbrett
    for (let i: number = 0; i < 8; i++) {
        for (let j: number = 0; j < 8; j++) {
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

    /********************************************************************************************************
   Aufgabe 3a
   ********************************************************************************************************/
    let x: number = 0;
    let divList: NodeListOf<HTMLElement> = document.getElementsByTagName("div");

    for (x; x < 8; x++) {
    divList[x].addEventListener("click", clickEvent);    
    }

});

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
    div.innerText = "" + a;
    a = a * 2;
}

//Schwarze Divs
function black(_number: number): void {
    let div: NodeList = document.getElementsByTagName("div");
    let currentDiv: HTMLDivElement = <HTMLDivElement>div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "black";
        currentDiv.style.color = "white";
        currentDiv.style.textAlign = "center";
    }
}
//Weiﬂe Divs
function white(_number: number): void {
    let div: NodeList = document.getElementsByTagName("div");
    let currentDiv: HTMLDivElement = <HTMLDivElement>div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "white";
        currentDiv.style.color = "black";
        currentDiv.style.textAlign = "center";
    }
}

/********************************************************************************************************
Aufgabe 3a
********************************************************************************************************/
let x: number = 0;
let divList: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
let state: boolean = true;

function clickEvent(): void {
    for (x; x < 8; x++) {
        if (state == true) {
            divList[x].style.borderColor = "yellow";
            state = false;
        }
        else {
            divList[x].style.borderColor = "black";
            state = true;
        }
    }
}







