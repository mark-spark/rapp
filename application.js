var Rapp = {
    KEY_CODES: {ENTER: 13, DELETE: 8}
}

function pageSetup() {
    setupLogin();
}

function setupLogin() {
    var inputs;
    inputs = $("#login .input-group input");
    inputs.keydown(handleLoginKeyDown)
}

function handleLoginKeyDown(evt) {
    if(evt.keyCode == Rapp.KEY_CODES.ENTER){
        console.log("hello world");
        
    }else if(evt.keyCode == Rapp.KEY_CODES.DELETE){ 
        console.log("test delete")
    }else {
        console.log (evt.keyCode);
        
    }
}

$(document).ready(pageSetup)