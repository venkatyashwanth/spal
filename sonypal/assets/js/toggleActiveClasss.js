var header = document.getElementById("nextProgramSchedule");
var dateBox = header.getElementsByClassName("scheduleBoxDates");
for (var i = 0; i < dateBox.length; i++) {
  dateBox[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("presentSchedule");
    current[0].className = current[0].className.replace(" presentSchedule", "");
    this.className += " presentSchedule";
  });
}
