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
});
//# sourceMappingURL=meinPortfolio.js.map