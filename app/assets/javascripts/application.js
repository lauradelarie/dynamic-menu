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


// push all the added elements prices into this array and
// .reduce to get the sum
var pricesArray = [];

function calculateTotal(){
  var totalPrice = pricesArray.reduce((a, b) => {
    return a + b
  }).toFixed(2)

  $('ul.total-price').append('<li></li>').html(totalPrice);
}


function removeTopping(event) {
//remove topping from orderlist
  var toppingId = $(event.target).parent().siblings('.topping-name').attr('id');
  $('#topping-' + toppingId).remove()
//remove topping's price from pricesArray
  var toppingPrice = Number($(event.target).parent().siblings('.topping-name').data("price").Price);
  var index = pricesArray.indexOf(toppingPrice);
  pricesArray.splice(index, 1);

  calculateTotal();
}

function addTopping(event) {
  var topping = $(event.target).parent().siblings('.topping-name').html();
  var toppingId = $(event.target).parent().siblings('.topping-name').attr('id');
  var newTopping = $('<li></li>').html(topping);
  newTopping.attr('id', 'topping-' + toppingId);
  newTopping.attr('val', 1)

  $('#order-list-toppings').append(newTopping);

  // get topping price and add to pricesArray
  var toppingPrice = Number($(event.target).parent().siblings('.topping-name').data("price").Price);
  pricesArray.push(toppingPrice);

  calculateTotal();
}

function removeBurger(event){

//remove the burger from the orderlist
  var burgerId = $(event.target).parent().attr('id');
  $('#' + burgerId).remove();

//remove the burger's price from the pricesArray
  var burgerPrice = Number($(event.target).parent().attr('data-price'));
  var index = pricesArray.indexOf(burgerPrice);
  pricesArray.splice(index, 1);

  $('.choose-burger-button').show();

  calculateTotal();
}

function addBurger(event) {
  event.preventDefault();

  var burgerPrice = Number($(event.target).parent().siblings('.burger-price').data("price").Price);
  var parent = $(event.target).parent().siblings('.burger-name');
  var meat = parent.html();
  var burgerId = parent.attr('id');
  var newBurger = $('<li></li>').html(meat);
  newBurger.attr('id', 'burger-' + burgerId);
  newBurger.attr('data-price', burgerPrice);

  $('#order-list-burger').append(newBurger);

  var deleteButton = $('<input>').html('X');
  deleteButton.attr('type', 'button')
  deleteButton.attr('onClick', 'removeBurger(event)');

  newBurger.append(deleteButton);

  $('.choose-burger-button').hide()

  pricesArray.push(burgerPrice);

  calculateTotal();
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
