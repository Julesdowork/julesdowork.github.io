// check off specific to-dos
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// delete to-do from list
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
})

// create a new to-do to list
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(`<li> <span><i class="fas fa-trash"></i></span> ${todoText}</li>`);
  }
});

$("#toggleInput").click(function() {
  $("input[type='text']").fadeToggle();
})