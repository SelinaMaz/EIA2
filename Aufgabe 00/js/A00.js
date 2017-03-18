document.addEventListener('DOMContentLoaded', function () {
    var person = prompt("Geben Sie ihren Namen ein");
    if (person != null) {
        document.getElementById("wellcome").innerHTML = "Hello" + " " + person;
    }
});
