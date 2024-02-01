$("div").addClass("past");
$("div").addClass("present");
$("div").addClass("future");

$(document).ready(function() {

  $(".saveBtn").on("click", function() {
    event.preventDefault();

    const timeBlockId = $(this).parent().attr("id");

    localStorage.setItem(timeBlockId, $(this).prev().val());

    console.log(localStorage.getItem(timeBlockId));
  });
});

const currentHour = dayjs().hour();

$(".time-block").each(function() {
  const blockHour = parseInt($(this).attr("id").split("-")[1]);

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

$("#currentDay").text(dayjs().format("dddd, MMMM DD"));

