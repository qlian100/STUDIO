/* please, make sure you only have one "document ready" function */
$(document).ready(function(){
	$("nav a:nth-child(2)").addClass("active")

	$("nav a").click(function(event){
		goTo = $(this).attr("href")

		event.preventDefault()

		//eventually take these two out
		//$("nav a").removeClass("active")
		//$(this).addClass("active")


$("html, body").animate({
	scrollTop: $(goTo).offset().top}, 1000)	
	})// end nav a click



$("section").each(function(){
	$(this).attr("start", $(this).offset().top-1)
	$(this).attr("end", $(this).offset().top+$(this).height())

})


$(window).scroll(function(value, index){
	curr = $(document).scrollTop()
	//console.log(curr)
	$("nav a").removeClass("active")
	
	$("section").each(function(){
		if((curr > $(this).attr("start")) && (curr < $(this).attr("end"))){
			$("nav a").eq($(this).index()).addClass("active")
		}

	})


})



    
// hey!  you're gonna need to make a slider!  put that code below here! :)     
    
    
    

})//end doc ready











$(document).ready(function(){


var totalSlides = 5 
var currentSlide = 1
 
			$(".right") .click (function(){

				if(currentSlide<totalSlides){


					$(".slidebox").animate({left:"-=1000"},"300")

					currentSlide  = currentSlide+1


				}

			})//end right ready//





						$(".left") .click (function(){


							if(currentSlide>1){


								$(".slidebox").animate({left:"+=1000"},"300")
								currentSlide  = currentSlide-1

							}

			})//end left ready//



}) //end doc ready//