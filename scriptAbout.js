
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

function sectionScrollFunction() {
  if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
      document.getElementById("Who").style.opacity = 1;
  } else {
      document.getElementById("Who").style.opacity = 0;
  }


  if (document.body.scrollTop > 825 || document.documentElement.scrollTop > 825) {
      document.getElementById("CM").style.opacity = 1;
  } else {
      document.getElementById("CM").style.opacity = 0;
  }
}
