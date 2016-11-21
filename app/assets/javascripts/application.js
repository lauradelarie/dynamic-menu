// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function removeTopping(event) {
  var toppingId = $(event.target).parent().siblings('.topping-name').attr('id');
  $('#topping-' + toppingId).remove()
}

function addTopping(event) {
  var topping = $(event.target).parent().siblings('.topping-name').html();
  var toppingId = $(event.target).parent().siblings('.topping-name').attr('id');
  var newTopping = $('<li></li>').html(topping);
  newTopping.attr('id', 'topping-' + toppingId);
  newTopping.attr('val', 1)

  $('#order-list-toppings').append(newTopping);
}

function addBurger(event) {
  event.preventDefault();

  var parent = $(event.target).parent().siblings('.burger-name');
  var meat = parent.html();
  var newBurger = $('<li></li>').html(meat);

  $('#order-list-burger').append(newBurger)
}

$(document).ready(function() {
  $('.choose-burger-button').bind('click', addBurger);

  var check;
  $('.choose-topping-checkbox').bind('click', function(){
    check = $(event.target).prop("checked");

    if(check) {
      console.log("checked")
      addTopping(event);
    } else {
      console.log("not checked")
      removeTopping(event);
    };

  });
});
