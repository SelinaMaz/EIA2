namespace Form {

    let iceButton: HTMLElement = document.getElementById("IceButton");
    iceButton.addEventListener("onClick", createNewIce);
    
    
    function createNewIce(): void {
        console.log("hallo");
    }
}