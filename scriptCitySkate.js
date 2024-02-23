//Header slide animation
window.onload = function() {
    headerSlide()
};

function headerSlide() {
    document.getElementById("header").style.left = "50%";
}

//Delays the appearance of content
window.setTimeout(contentFormat, 1000);

function contentFormat() {
    document.getElementById("header").style.fontSize = "80px";
    document.getElementById("desc").style.opacity = 1;
    document.getElementById("vid").style.opacity = 1;
}
