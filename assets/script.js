var current = moment().format("MMMM Do YYYY");
var display = $("#currentDay");
display.text(current);

$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var descr = $(this).siblings(".description").val();
    localStorage.setItem(time, descr);
});

var hour = moment().format("H");
for (var i= 1; i < 18; i++) {
    $("#" + i + "am" + " .description").val(localStorage.getItem(i + "am"));
    $("#" + i + "pm" + " .description").val(localStorage.getItem(i + "pm"));
    if (hour > i) {
        $("#" + i).addClass("past");
    } else if (hour == i) {
        $("#" + i).addClass("present");
    } else {
        $("#" + i).addClass("future");
    }
}
