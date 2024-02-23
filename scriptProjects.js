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
}

document.getElementById("IP").onclick = function() {
    gameSectionMove()
};

function gameSectionMove() {
    document.getElementById("p1").style.opacity = 0;
    document.getElementById("header").style.left = "120%";
    document.getElementById("WebDev").style.left = "120%";
    document.getElementById("games").style.textAlign = "left";
    document.getElementById("games").style.left = "1%";

    var x = document.getElementsByTagName("h2");
        for(var i = 0; i < x.length; i++) {
            x[i].style.color = "#cc5500";
        }

    document.getElementById("gameContent").style.display = "block";
    document.getElementById("backButton").style.display = "block";
    setTimeout(function() {
        document.getElementById("gameContent").style.opacity = 1;
        document.getElementById("backButton").style.opacity = 1;
        }, 1000);
    
}

document.getElementById("IP").onmouseout = function() {
    hideSection("p1")
};

function hideSection(id) {
    var p = document.getElementById(id);
    p.style.display = "none";
}



document.getElementById("DP").onmouseover = function() {
    showSection("p2")
};

document.getElementById("DP").onclick = function() {
    wdSectionMove()
};

document.getElementById("DP").onmouseout = function() {
    hideSection("p2")
};

function wdSectionMove() {
    document.getElementById("p2").style.opacity = 0;
    document.getElementById("header").style.left = "120%";
    document.getElementById("games").style.left = "120%";
    document.getElementById("WebDev").style.textAlign = "left";
    document.getElementById("WebDev").style.left = "1%";

    var x = document.getElementsByTagName("h2");
        for(var i = 0; i < x.length; i++) {
            x[i].style.color = "#cc5500";
        }
    
    document.getElementById("WebDevContent").style.display = "block";
    document.getElementById("backButton").style.display = "block";
    setTimeout(function() {
        document.getElementById("WebDevContent").style.opacity = 1;
        document.getElementById("backButton").style.opacity = 1;
        }, 1000);

}

//back button
document.getElementById("backButton").onclick = function() {
    backClick()
};

function backClick() {
    document.getElementById("p2").style.opacity = 1;
    document.getElementById("p1").style.opacity = 1;
    document.getElementById("header").style.left = "50%";
    document.getElementById("games").style.left = "50%";
    document.getElementById("WebDev").style.left = "50%";
    document.getElementById("WebDev").style.textAlign = "left";

    var x = document.getElementsByTagName("h2");
        for(var i = 0; i < x.length; i++) {
            x[i].style.color = "beige";
        }
    document.getElementById("WebDevContent").style.display = "none";
    document.getElementById("gameContent").style.display = "none";
    document.getElementById("backButton").style.display = "none";
    setTimeout(function() {
        document.getElementById("WebDevContent").style.opacity = 0;
        document.getElementById("gameContent").style.opacity = 0;
        document.getElementById("backButton").style.opacity = 0;
        }, 1000);
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