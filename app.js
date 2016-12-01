
// function startTime() {
//     var cd = new Date();
//     var diem = "AM"
//     var h = cd.getHours();
//     var m = cd.getMinutes();
//     var s = cd.getSeconds();

//     if (h == 0) {
//     h = 12;
//     }
//     else if (h > 12) {
//         h = h - 12;
//         diem = "PM";
//     }
//     if (h < 10) {
//         h = "0" + h;
//     }
//     if (m < 10) {
//         m = "0" + m;
//     }
//     if (s < 10) {
//         s = "0" + s;
//     }
//     var myClock =  h + " : " + m + " : " + s + " " + diem;
//     document.getElementById("show").innerHTML = myClock;
//     setTimeout("startTime()" , 1000);
// }
// startTime();

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove"); //\u00D7
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('Ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '' || inputValue === " " ) {
    alert("Please Write Something!");
  } else {
    document.getElementById("myOL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function removed() {
    document.getElementById("myOL").innerHTML = "";
    li = [];
}