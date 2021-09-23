$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").hide();  // hide is oposite of show/
		$(".stream1").show("slow"); //toggle(""), slideUp(""), slideDown(""), SluideToggle(""), fadeIn(""), fadeOut(""), fadeToggle(""), fadeTo("");/
		$(".stream1").show("medium");
	  	$(".stream1").show("fast");
		$(".stream1").show(1000);
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream').addClass('highlight_stream'); // you can use in chain this two or moore
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
      // --------ex---------/
	$("p").css("color", "blue").slideUp(2000).slideDown(2000);  // chance color, slide up slide down
	$("a").attr("href", "http://www.exemple.com"); // add extention link to ancor.

	//---------------ex with botton--------/
	$("button").mouseenter(function() {
		$("button").removeClass("make-red").addClass("make-border");
	});
	$("button").mouseleave(function() {
		$("button").removeClass("make-border").addClass("make-red");
	})
	


}); 
