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
        login();
    }
}

function login(){
    var username;
    var room_name;
    
    username = $("#username-input").val(); 
    username = $.trim(username);
    room_name = $("#room-name-input").val();
    room_name = $.trim(room_name);
    
    if(!username){
        alert("YOU NEED A USERNAME!!!!!!!");
    }else if(!room_name){
        alert("YOU NEED A ROOM NAME !!!!!!!")
    }else {
        initializeChat()
    }
}

function initializeChat(){
    $("#page-frame").addClass("chat-mode");    
}

$(document).ready(pageSetup);

/*
function multiply(x,y){
    var result;
    var counter;
    result = 0;
    counter = 0;
    while(counter<y){
        result = result + x;
        counter = counter + 1;
    
    }
    return result;
}

var twelve = multiply(3,4);
var juan = multiply(58936,395824); 
alert(twelve);
alert(juan);
*/









