
document.getElementById("about").onmouseover = function() {
    mouseOver1()
};

document.getElementById("about").onmouseout = function() {
    mouseOut1()
};

function mouseOver1() {
    document.getElementById("about").innerHTML = "ABOUT";
    document.getElementById("dominic").style.left = "20%";
}

function mouseOut1() {
    document.getElementById("about").innerHTML = "DOMINIC";
    document.getElementById("dominic").style.left = "15%";
}






document.getElementById("project").onmouseover = function() {
    mouseOver2()
};

document.getElementById("project").onmouseout = function() {
    mouseOut2()
};

function mouseOver2() {
    document.getElementById("project").innerHTML = "PROJECTS";
    document.getElementById("adams").style.left = "20%";
}

function mouseOut2() {
    document.getElementById("project").innerHTML = "ADAMS";
    document.getElementById("adams").style.left = "15%";
}