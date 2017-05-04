// we maken het balk element aan
var $balk = $('<div class="balk"></div>');

// en plaatsen het in de pagina
$($balk).appendTo('body');


/* element beweegbaar maken */
// --> hiervoor moet je nog de js van jquery ui toevoegen
// $( function() {
//        $( ".balk" ).draggable();
//    } );

/* verandere van style door te klikken */
// --> check de code die we vorige keer gemaakt hebben.
//$('.balk').click(function() {
//    $(".balk").removeClass('balk');
//    $(".twee").addClass('twee');
//});
