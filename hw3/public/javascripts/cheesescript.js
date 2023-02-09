//////////////////////
//
// javascript for cheesecake form
// Author: Bryan Soriano
// Date: Spring 23
//
//////////////////////

$("#submit").click(function(){

	var input = $("#notes").val();

	// if vegan is in the notes give a warning, else display order details
	if (input.indexOf('vegan') > -1) {
		alert("WARNING! Cheesecakes contain dairy.");
	} else { 
	// Get values of the menus to report
     
	var amount = $( "#quantity" ).val();
	var tops = $("input[name='topping']:checked").val();
	var txt = $("#notes").val();
	$("h2").html("\nThank you for your order!\n Quantity: " + amount + "\n Topping: " + tops +
				"\n Notes: " + txt);
      
	$("form").hide();
	}    
});


// Update dropdown with selected value

	
  
// Listen for when a month is clicked
  
$('#jan').click(function () {
	$("#months").text("Jan");
});
$('#feb').click(function () {
	$("#months").text("Feb");
});
$('#mar').click(function () {
	$("#months").text("Mar");
});
$('#apr').click(function () {
	$("#months").text("Apr");
});
$('#may').click(function () {
	$("#months").text("May");
});
$('#jun').click(function () {
	$("#months").text("Jun");
});
$('#jul').click(function () {
	$("#months").text("Jul");
});
$('#aug').click(function () {
	$("#months").text("Aug");
});
$('#sep').click(function () {
	$("#months").text("Sep");
});
$('#oct').click(function () {
	$("#months").text("Oct");
});
$('#nov').click(function () {
	$("#months").text("Nov");
});
$('#dec').click(function () {
	$("#months").text("Dec");
});
