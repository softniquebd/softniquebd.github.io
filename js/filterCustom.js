

filterSelection("all")


function filterSelection(c) {
    var x, w;
    x = document.getElementsByClassName("filterDiv");

    if (c == "all") {
        c = "";
    }

    for (w = 0; w < x.length; w++) {
        w3RemoveClass(x[w], "show");
        if (x[w].className.indexOf(c) > -1) w3AddClass(x[w], "show");
    }
}

function w3AddClass(element, name) {
  var z, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (z = 0; z < arr2.length; z++) {
    if (arr1.indexOf(arr2[z]) == -1) {element.className += " " + arr2[z];}
  }
}

function w3RemoveClass(element, name) {
  var k, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
   if (name == 'show') {
    var selectedDiv = $(element).children(".second_element");
    var height = selectedDiv.height();
    console.log(selectedDiv)
     console.log(height)
     $('something:visible').css('height', '0')
  //   $(element).closest(".filtr-item").height(height)
   }
  for (k = 0; k < arr2.length; k++) {
    while (arr1.indexOf(arr2[k]) > -1) {
      arr1.splice(arr1.indexOf(arr2[k]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filtrBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}