
window.onscroll = function() {
    headerScrollFunction() 
    sectionScrollFunction()
};

function headerScrollFunction() {
    if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
        document.getElementById("header").style.fontSize = "65px";
        document.getElementById("title").style.fontSize = "20px";
        document.getElementById("title").innerHTML = "DOMINIC";
    } else {
        document.getElementById("header").style.fontSize = "120px";
        document.getElementById("title").innerHTML = "DOMINIC ADAMS"
        document.getElementById("title").style.fontSize = "30px";
        
    }
}

function sectionScrollFunction() {
  if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
      document.getElementById("Who").style.opacity = 1;
  } else {
      document.getElementById("Who").style.opacity = 0;
  }


  if (document.body.scrollTop > 925 || document.documentElement.scrollTop > 925) {
      document.getElementById("CM").style.opacity = 1;
  } else {
      document.getElementById("CM").style.opacity = 0;
  }

  if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
      document.getElementById("SKILLS").style.opacity = 1;
  } else {
      document.getElementById("SKILLS").style.opacity = 0;
  }


  if (document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600) {
      document.getElementById("projects").style.opacity = 1;
      document.getElementById("projects").style.right = "20%";
  } else {
      document.getElementById("projects").style.opacity = 0;
      document.getElementById("projects").style.right = "-20%";
  }
}
