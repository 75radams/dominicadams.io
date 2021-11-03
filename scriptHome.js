document.getElementById("dominic").onmouseover = function() {
    mouseOver1()
};

document.getElementById("dominic").onmouseout = function() {
    mouseOut1()
};

function mouseOver1() {
    document.getElementById("dominic").innerHTML = "ABOUT";
    document.getElementById("dominic").style.left = "20%";
    document.getElementById("dominic").style.color = "white";
}

function mouseOut1() {
    document.getElementById("dominic").innerHTML = "DOMINIC";
    document.getElementById("dominic").style.left = "15%";
    document.getElementById("dominic").style.color = "#00ff7f";
}






document.getElementById("adams").onmouseover = function() {
    mouseOver2()
};

document.getElementById("adams").onmouseout = function() {
    mouseOut2()
};

function mouseOver2() {
    document.getElementById("adams").innerHTML = "PROJECTS";
    document.getElementById("adams").style.left = "20%";
    document.getElementById("adams").style.color = "white";
    var node = document.createElement("a");
    node.href = "MyWork.html";
    document.getElementById("adams").appendChild(node);
}

function mouseOut2() {
    document.getElementById("adams").innerHTML = "ADAMS";
    document.getElementById("adams").style.left = "15%";
    document.getElementById("adams").style.color = "#00ff7f";
}