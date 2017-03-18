document.addEventListener('DOMContentLoaded', function() {
    
    var person: string = prompt("Geben Sie ihren Namen ein");
    
    if ( person != null) {
       document.getElementById("wellcome").innerHTML = "Hello" + " " + person;
        }
    
});