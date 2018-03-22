//Wait for the page to load before running the code
$(document).ready(function(){
//listen for the click to perform the function.
	$("#submit-btn").click(changeCity);
//name the function
	function changeCity(){

		//prevent page from performing the default action
		event.preventDefault();

		console.log("working");

		//define the variable and call the ID value.
		var city = $("#city-type").val();

		//use the if and else conditional to control background change depending on the user input.
		//apply a class for each background change
		if (city=="New York"||city=="NYC"||city=="New York City"){
			$("body").attr("class","nyc");
		}

		else if (city=="San Francisco"||city=="SF"||city=="Bay Area"){
			$("body").attr("class","sf");
		}

		else if(city=="Los Angeles"||city=="LA"||city=="LAX"){
			$("body").attr("class","la");	
		}

		else if (city=="Austin"||city=="ATX"){
			$("body").attr("class","austin");
		}

		else if (city=="Sydney"||city=="SYD"){
			$("body").attr("class","sydney");
			
		}
	}
})