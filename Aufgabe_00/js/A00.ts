document.addEventListener("DOMContentLoaded", function(): any {
    
    var person: string = prompt("Geben Sie ihren Namen ein");
    
    if ( person != null) {
       document.getElementById("wellcome").innerHTML = "Hello" + " " + person;
        }
    
});