//Header slide animation
window.onload = function() {
    headerSlide()
    contentSlide()
};

function headerSlide() {
    document.getElementById("header").style.left = "50%";
}

//Delays the appearance of content
window.setTimeout(contentFormat, 1000);

function contentFormat() {
    document.getElementById("header").style.fontSize = "100px";
    document.getElementById("games").style.opacity = 1;
    document.getElementById("WebDev").style.opacity = 1;
}


//Project information
document.getElementById("IP").onmouseover = function() {
    showSection("p1")
};

function showSection(id) {
    var p = document.getElementById(id);
    p.style.display = "block";
    p.style.opacity = 1;
}

document.getElementById("IP").onclick = function() {
    gameSectionMove()
};

function gameSectionMove() {
    document.getElementById("p1").style.display = "none";
    document.getElementById("header").style.left = "120%";
    document.getElementById("header").style.display = "none";
    document.getElementById("WebDev").style.left = "120%";
    document.getElementById("WebDev").style.display = "none";
    document.getElementById("IP").style.fontSize = "100px";
    document.getElementById("games").style.textAlign = "left";
    document.getElementById("games").style.width = "80%";
    document.getElementById("games").style.left = "20%";

}

document.getElementById("IP").onmouseout = function() {
    hideSection("p1")
};

function hideSection(id) {
    var p = document.getElementById(id);
    p.style.display = "none";
    p.style.opacity = "0";
}



//readjust the home tab
window.onscroll = function() {
    headerScrollFunction()
};

function headerScrollFunction() {
    if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
        document.getElementById("title").style.fontSize = "20px";
        document.getElementById("title").innerHTML = "DOMINIC";
    } else {
        document.getElementById("title").innerHTML = "DOMINIC ADAMS"
        document.getElementById("title").style.fontSize = "30px";
        
    }
}