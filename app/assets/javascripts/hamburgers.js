
// JS regarding admin pages ///////////


function freeTable(event) {
  var id = $(event.target).data("id").Id
  var table = $(event.target).data("id").table

  $.ajax({
    type: "PUT",
    url: "/tables/" + id,
    data: JSON.stringify({
      table: {
        taken: false
      }
    }),

    contentType: "application/json",
    dataType: "json"
  })

  .success(function(data) {
    var succes = $('<li></li>').html("table freed.")
    $('.kitchen-messages').append(succes)
  })

  .fail(function(error) {
    errors = JSON.parse(error.responseText).error

    $.each(errors, function(index, value) {
      var errorItem = $("<li></li>").html(value);
      $("#errors").append(errorItem);
    });
  })

}


function serveBurger(event){
  event.preventDefault();
  var id = $(event.target).data('id').Id;

  $.ajax({
    type: "PUT",
    url: '/hamburgers/' + id,
    data: JSON.stringify({
      order: {
        served: true,
      }
    }),

    contentType: "application/json",
    dataType: "json"
  })

  .success(function() {
    $("#serve-" + id).parent().remove();
    localStorage.clear();
  })

  .fail(function(error) {
    errors = JSON.parse(error.responseText).error

    $.each(errors, function(index, value) {
      var errorItem = $("<li></li>").html(value);
      $("#errors").append(errorItem);
    });
  });
}

$(document).on('turbolinks:load', function(){
  $('.serve-burger-button').bind('click', serveBurger);
  // $('.serve-burger-button').hide();
  $('.free-table-button').bind('click', freeTable);
});
