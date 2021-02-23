	//resize window js 
  
  
  $(window).bind("resize", function () {
    //get window width
		var widths = $(this).width();
		if(widths <= 768) {
			$("h2").addClass('foysal');
		}else{
			$("h2").removeClass('foysal');
		}
	}).trigger('resize');
