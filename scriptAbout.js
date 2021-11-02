
window.onscroll = function() {
    headerScrollFunction() 
    sectionScrollFunction()
};

function headerScrollFunction() {
    if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
        document.getElementById("header").style.fontSize = "65px";
    } else {
        document.getElementById("header").style.fontSize = "100px";
    }
}


$(document).ready(function() {
    $(document).scroll(function() {
    if ($(document).body.scrollTop > 250 || $(document).documentElement.scrollTop > 250) {
      $("#Who").fadeIn("slow");
    } else {
      $("#Who").fadeOut("slow");
    }

  });
});
