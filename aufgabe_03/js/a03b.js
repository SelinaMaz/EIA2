/*
Aufgabe: 3
Name: Selina Mazzaro
Matrikel: 254086
Datum: 06.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
/*Diese Aufgabe wurde in Zusammenarbeit mit Jacqueline Wagner und Jana Burger erstellt*/
document.addEventListener("DOMContentLoaded", function () {
    let cards = [
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"];
    let handcards;
    let ablagecards;
    let nachziehstapel = document.getElementById("nachziehstapel");
    let ablagestapel = document.getElementById("ablagestapel");
    nachziehstapel.addEventListener("click", ClickEvent);
    function ClickEvent() {
        for (let i = 0; i < cards.length && i < 5; i++) {
            let div = document.createElement("div"); //create div
            document.getElementById("handstapel").appendChild(div); //anhängen an handkarten
            let wert = Math.floor((Math.random() * 31) + 0);
            div.className = "box";
            let s = div.style;
            s.borderStyle = "1 px solid black";
            s.height = "15em";
            s.width = "10em";
            s.backgroundColor = "green";
            s.cssFloat = "left";
            div.textContent = cards[wert];
            handcards.push(cards[wert]);
            cards.splice(wert, 1); //entfernt Karte von Nachziehstapel
        }
    }
    ;
});
//# sourceMappingURL=a03b.js.map