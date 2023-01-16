var form = document.getElementById("registration");
var open = document.getElementById("trigger-modal");
var close = document.getElementsByClassName("close")[0];

open.onclick = function() {
    form.style.display = "block";
}

close.onclick = function() {
    form.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == form) {
        form.style.display = "none";
    }
}

function redirect() {
    window.location.href="Homepage.html";
}