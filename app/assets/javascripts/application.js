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
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

var choicesArray = [];

function makeDescription() {
  var description = choicesArray.join(', ');
  $('ul.description').append('<li></li>').html(description);
}

// Order funtions//
///////////////////////////////////////////////////////////////////////////////////

function createOrder(price, choice, tableId){

  $.ajax({
    type: "POST",
    url: "/hamburgers",
    data: JSON.stringify({
      order: {
      total_price: price,
      choise: choice,
      table_id: tableId
    }
  }),

    contentType: "application/json",
    dataType: "json"
  })

  .success(function(data) {
    var succes = $('<li></li>').html("Sent to the kitchen!");
    $('ul.description').append(succes);
  })

  .fail(function(error) {
    errors = JSON.parse(error.responseText).error;

    $.each(errors, function(index, value) {
      var errorItem = $("<li></li>").html(value);
      $("#errors").append(errorItem);
    });
  });
}

function submitOrder(event) {
  var price = Number($(event.target).siblings('.total-price').html());
  var choice = $(event.target).siblings('.description').html();
  var tableNr = $('.dropdownmenu').val();
  // var tableId = $('.dropdownmenu :selected').data("id").Id
  var tableIdStorage = localStorage.getItem('tableId');
  var tableObject = JSON.parse(tableIdStorage);
  var tableId = Number(tableObject["Id"]);

  createOrder(price, choice, tableId);
}

var pricesArray = [];

function calculateTotal() {
  var totalPrice;
  (pricesArray.length > 0) ?
  totalPrice = pricesArray.reduce(function(a, b) {
    return a + b
  }).toFixed(2) : (totalPrice = 0)

  $('ul.total-price').append('<li>€</li>').html(totalPrice);
}

// Sauce funtions//
///////////////////////////////////////////////////////////////////////////////////

function removeSauce(event) {
//remove side from orderlist
  var sauceId = $(event.target).parent().siblings('.sauce-name').attr('id');
  $('#sauce-' + sauceId).remove();
//remove sides price from pricesArray
  var saucePrice = Number($(event.target).parent().siblings('.sauce-name').data("price").Price);
  var index = pricesArray.indexOf(saucePrice);
  pricesArray.splice(index, 1);

  calculateTotal();

//remove the sides name from the choicesArray
  var sauceName = $(event.target).parent().siblings('.sauce-name').html();
  var sauceIndex = choicesArray.indexOf(sauceName);
  choicesArray.splice(sauceIndex, 1);

  makeDescription();
}

function addSauce(event) {
  var sauce = $(event.target).parent().siblings('.sauce-name').html();
  var sauceId = $(event.target).parent().siblings('.sauce-name').attr('id');
  var newSauce = $('<li></li>').html(sauce);
  newSauce.attr('id', 'sauce-' + sauceId);
  newSauce.attr('val', 1);

  $('#order-list-sauces').append(newSauce);

  // add the topping's price to the pricesArray
  var saucePrice = Number($(event.target).parent().siblings('.sauce-name').data("price").Price);

  pricesArray.push(saucePrice);
  calculateTotal();

  choicesArray.push(sauce);
  makeDescription();
}


// Side funtions//
///////////////////////////////////////////////////////////////////////////////////

function removeSide(event) {
//remove side from orderlist
  var sideId = $(event.target).parent().siblings('.side-name').attr('id');
  $('#side-' + sideId).remove();
//remove sides price from pricesArray
  var sidePrice = Number($(event.target).parent().siblings('.side-name').data("price").Price);
  var index = pricesArray.indexOf(sidePrice);
  pricesArray.splice(index, 1);

  calculateTotal();

//remove the sides name from the choicesArray
  var sideName = $(event.target).parent().siblings('.side-name').html();
  var sideIndex = choicesArray.indexOf(sideName);
  choicesArray.splice(sideIndex, 1);

  makeDescription();
}

function addSide(event) {
  var side = $(event.target).parent().siblings('.side-name').html();
  var sideId = $(event.target).parent().siblings('.side-name').attr('id');
  var newSide = $('<li></li>').html(side);
  newSide.attr('id', 'side-' + sideId);
  newSide.attr('val', 1);

  $('#order-list-sides').append(newSide);

  // add the topping's price to the pricesArray
  var sidePrice = Number($(event.target).parent().siblings('.side-name').data("price").Price);

  pricesArray.push(sidePrice);
  calculateTotal();

  choicesArray.push(side);
  makeDescription();
}


//Topping Functions//
///////////////////////////////////////////////////////////////////////////////////

function removeTopping(event) {
//remove topping from orderlist
  var toppingId = $(event.target).parent().siblings('.topping-name').attr('id');
  $('#topping-' + toppingId).remove();
//remove topping's price from pricesArray
  var toppingPrice = Number($(event.target).parent().siblings('.topping-name').data("price").Price);
  var index = pricesArray.indexOf(toppingPrice);
  pricesArray.splice(index, 1);

  calculateTotal();

//remove the topping's name from the choicesArray
  var toppingName = $(event.target).parent().siblings('.topping-name').html();
  var toppingIndex = choicesArray.indexOf(toppingName);
  choicesArray.splice(toppingIndex, 1);

  makeDescription();
}

function addTopping(event) {
  var topping = $(event.target).parent().siblings('.topping-name').html();
  var toppingId = $(event.target).parent().siblings('.topping-name').attr('id');
  var newTopping = $('<li></li>').html(topping);
  newTopping.attr('id', 'topping-' + toppingId);
  newTopping.attr('val', 1);

  $('#order-list-toppings').append(newTopping);

  // add the topping's price to the pricesArray
  var toppingPrice = Number($(event.target).parent().siblings('.topping-name').data("price").Price);

  pricesArray.push(toppingPrice);
  calculateTotal();

  choicesArray.push(topping);
  makeDescription();
}


// Burger functions//
///////////////////////////////////////////////////////////////////////////////////

function removeBurger(event){

//remove the burger from the orderlist
  var burgerId = $(event.target).parent().attr('id');
  $('#' + burgerId).remove();

//remove the burger's price from the pricesArray
  var burgerPrice = Number($(event.target).parent().attr('data-price'));
  var priceIndex = pricesArray.indexOf(burgerPrice);
  pricesArray.splice(priceIndex, 1);

  calculateTotal();

  //remove the burger's name from the choicesArray
  var burgerName = $(event.target).siblings('.meat-name').html();
  var choiceIndex = choicesArray.indexOf(burgerName);
  choicesArray.splice(choiceIndex, 1);

  makeDescription();

  $('.choose-burger-button').show();
}

function addBurger(event) {
  event.preventDefault();

  var burgerPrice = Number($(event.target).parent().siblings('.burger-price').data("price").Price);
  var parent = $(event.target).parent().siblings('.burger-name');
  var meat = parent.html();
  var burgerId = parent.attr('id');
  var newBurger = $('<li></li>').html('<div class="meat-name">' + meat + '</div>');
  newBurger.attr('id', 'burger-' + burgerId);
  newBurger.attr('data-price', burgerPrice);

  $('#order-list-burger').append(newBurger);

  var deleteButton = $('<input>').html('X');
  deleteButton.attr('type', 'button');
  deleteButton.attr('onClick', 'removeBurger(event)');

  newBurger.append(deleteButton);

  $('.choose-burger-button').hide();

  pricesArray.push(burgerPrice);
  calculateTotal();

  choicesArray.push(meat);
  makeDescription();
}

//choose a table dropdown
///////////////////////////////////////////////////////////////////////////////////

function chooseTable(){
  var tableNr = $('.dropdownmenu :selected').text();
  var id = $('.dropdownmenu :selected').data("id").Id

  $.ajax({
    type: "PUT",
    url: "/tables/" + id,
    data: JSON.stringify({
      table: {
        taken: true
      }
    }),

    contentType: "application/json",
    dataType: "json"
  })

  .success(function(data) {
    var tableIdStorage = { "Id": id }
    localStorage.setItem('tableId', JSON.stringify(tableIdStorage));
  })

  .fail(function(error) {
    errors = JSON.parse(error.responseText).error

    $.each(errors, function(index, value) {
      var errorItem = $("<li></li>").html(value);
      $("#errors").append(errorItem);
    });
  })

}

///////////////////////////////////////////////////////////////////////////////////
$(document).on('turbolinks:load', function(){
  var tableIdStorage = localStorage.getItem('tableId');
  var tableObject = JSON.parse(tableIdStorage);
  var tableId = Number(tableObject["Id"]);

  $('#table-number').append(tableId);

  $('.choose-burger-button').bind('click', addBurger);

  $('.dropdownmenu').bind('change', chooseTable);

  var check;
  $('.choose-topping-checkbox').bind('click', function(){
    check = $(event.target).prop("checked");

    if(check) {
      console.log("checked");
      addTopping(event);
    } else {
      console.log("not checked");
      removeTopping(event);
    };

  });

  var check;
  $('.choose-side-checkbox').bind('click', function(){
    check = $(event.target).prop("checked");

    if(check) {
      console.log("checked");
      addSide(event);
    } else {
      console.log("not checked");
      removeSide(event);
    };

  });

  var check;
  $('.choose-sauce-checkbox').bind('click', function(){
    check = $(event.target).prop("checked");

    if(check) {
      console.log("checked");
      addSauce(event);
    } else {
      console.log("not checked");
      removeSauce(event);
    };

  });

  $('.place-order').bind('click', submitOrder);

  $(function() {
    $('[data-toggle="popover"]').popover();
    container: 'body'
  });
});

//popover
///////////////////////////////////////////////////////////////////////////////////
