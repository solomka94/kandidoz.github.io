//mobile menu
$( ".cross" ).hide("fast");
$( ".menu" ).hide("fast");
$( ".hamburger" ).click(function() {
$( ".menu" ).fadeIn( "slow", function() {
$( ".hamburger" ).hide("fast");
$( ".cross" ).show("fast");
});
});

$( ".cross" ).click(function() {
$( ".menu" ).fadeOut( "slow", function() {
$( ".cross" ).hide("fast");
$( ".hamburger" ).show("fast");
});
});