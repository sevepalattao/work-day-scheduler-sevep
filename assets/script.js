var current = moment().format("MMMM Do YYYY");
var display = $("#currentDay");
display.text(current);

$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var descr = $(this).siblings(".description").val();
    localStorage.setItem(time, descr);
});

for (var i= 9; i < 12; i++) {
    $("#" + i + "am" + " .description").val(localStorage.getItem(i + "am"));
}

$("#12pm .description").val(localStorage.getItem("12pm"));

for (var i = 1; i < 6; i++) {
    $("#" + i + "pm" + " .description").val(localStorage.getItem(i + "pm"));
}