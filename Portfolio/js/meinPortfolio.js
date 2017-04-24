document.addEventListener('DOMContentLoaded', function () {
    //Klappmen�
    var burgerNav = document.getElementById("BurgerNav");
    var burgerButton = document.getElementById("burger");
    var state = true;
    burgerButton.addEventListener("click", function () {
        if (state) {
            burgerNav.style.display = "block";
            state = false;
        }
        else {
            burgerNav.style.display = "none";
            state = true;
        }
    });
    //Alle h2 grauer Hintergrund und wei�e Schrift
    var elems = document.getElementsByTagName("h2");
    for (var i = 0; i < elems.length; i++) {
        var Unterueberschrift = elems[i].getElementsByClassName("Unterueberschrift");
        console.log(i);
        console.log(elems);
        if (elems.length != 0) {
            elems[i].style.backgroundColor = "#9B9B9B";
            elems[i].style.color = "white";
        }
    }
});
//# sourceMappingURL=meinPortfolio.js.map