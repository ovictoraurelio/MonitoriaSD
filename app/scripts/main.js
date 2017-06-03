/* jshint devel:true */

$('.scrollto').on('click', function(e){
    //alert($(e.target).attr('id'));
    //console.log($('div#'+$(e.target).attr('id')));
    //console.log($('div#'+$(e.target).attr('id').offset()));
    $('html, body').animate({
      scrollTop: $('div#'+$(e.target).attr('id')).offset().top - 60
    }, 1000);
});