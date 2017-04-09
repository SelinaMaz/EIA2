/*
Aufgabe: 3
Name: Selina Mazzaro
Matrikel: 254086
Datum: 06.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
/*Diese Aufgabe wurde in Zusammenarbeit mit Jacqueline Wagner und Jana Burger erstellt*/
document.addEventListener("DOMContentLoaded", function(): void {


    let cards: string[] = [
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"
    ];

    let handcards: string[];
    let ablagecards: string[];
    let nachziehstapel: HTMLElement = document.getElementById("nachziehstapel");
    let ablagestapel: HTMLElement = document.getElementById("ablagestapel");


    nachziehstapel.addEventListener("click", ClickEvent);
    // if (handcards.length < 5 && cards.length != 0) {


    function ClickEvent(): void {


        for (let i: number = 0; i < cards.length && i < 5; i++) {

            let div: HTMLDivElement = document.createElement("div"); //create div
            document.getElementById("handstapel").appendChild(div); //anhängen an handkarten


            let wert: number = Math.floor((Math.random() * 31) + 0);

            div.className = "box";
            let s: CSSStyleDeclaration = div.style;
            s.borderStyle = "1 px solid black";
            s.height = "15em";
            s.width = "10em";
            s.backgroundColor = "grey";
            s.cssFloat = "left";


            //if (handcards.length < 5 && cards.length != 0) 
            // let wert: number = Math.floor((Math.random() * 31
  
      
            div.className = "divBox";
            div.textContent = cards[wert];
            handcards.push(cards[wert]);
            cards.splice(wert, 1); //entfernt Karte von Nachziehstapel

            div.addEventListener("click", function(): void {
                for (i, i < handcards.length; i++; ) {

                    var entferntesKind  = document.getElementById("handstapel").removeChild(div);

                    document.getElementById("ablagestapel").appendChild(div);
                    ablagecards.push(handcards[i]);
                    console.log("hallo");
                }
            });
        }
    }
});