// 
// // JS regarding admin pages ///////////
//
// function serveBurger(event){
//   event.preventDefault();
//   var id = $(event.target).data('id').Id;
//
//   $.ajax({
//     type: "PUT",
//     url: '/hamburgers/' + id,
//     data: JSON.stringify({
//       order: {
//         served: true
//       }
//     }),
//
//     contentType: "application/json",
//     dataType: "json"
//   })
//
//   .success(function() {
//     $("#serve-" + id).parent().remove();
//
//   })
//
//   .fail(function(error) {
//     errors = JSON.parse(error.responseText).error
//
//     $.each(errors, function(index, value) {
//       var errorItem = $("<li></li>").html(value);
//       $("#errors").append(errorItem);
//     });
//   });
// }
//
// $(document).ready(function() {
//   $('.serve-burger-button').bind('click', serveBurger);
// });
