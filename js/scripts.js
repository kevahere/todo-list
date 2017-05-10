//business logic
var todoList = function(task, duration) {
  this.task = task;
  this.duration = duration;
};

$(document).ready(function() {
  $("form#new-listitem").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#new-task").val();
    $("input#new-task").val("");


    $("ul#tasks").append("<li class='clickable'>" + userInput + "</li>");
    $("ul#tasks li").click(function(){
      $(this).wrap("<strike>");
      $(this).remove();
    })


  })
})
