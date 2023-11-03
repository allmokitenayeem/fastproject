$(function($){
   $('.hide').click(function(){
      $('.box').hide(500);
   })
   $('.show').click(function(){
      $('.box').show(500);
   })
   $('.toggle').dblclick(function(){
      $('.box').toggle(500);
   })
   $('.fadeIn').click(function(){
      $('.box').fadeIn(400);
   })
   $('.fadeOut').click(function(){
      $('.box').fadeOut(400);
   })
   $('.fadeToggle').click(function(){
      $('.box').fadeToggle(400);
   })



   $('.dropClick').click(function(){
      $('.dropdown').slideToggle();
   })
   $('.collapse_btn').click(function(){
      $('.menu').slideToggle(400);
   })

});