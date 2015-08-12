
//Create a document ready handler.
$(document).on('ready', function(){ 
	//Form Validation: Define a validation object for use on your page.
	$("#order-form").validate({
		debug: true,
		//Connect the validation object to an event handler tied to the submit button.
		submitHandler: function(form) {
			// submit form if valid
			form.submit();
		},
		//rules to determine form's validity
		rules: {
			"your-name": {
				required: true,
				maxlength: 127
			},
			
			"your-address": {
				required: true,
			},
			
			"your-city": {
				required: true,
			},
			
			"your-state": {
				required: true,
				minlength: 2,
				maxlength: 2
			},
			
			"your-zip": {
				required: true,
				digits: true,
				minlength: 5,
				maxlength: 5,
			},
			
			"card-holder-name": {
				required: true,
				maxlength: 127
			},
			
			"card-number": {
				required: true,
				creditcard: true,
				maxlength: 16
				},
			
			"expiry-month": {
				required: true,
			},
			
			"cvv": {
				required: true,
				digits: true,
				minlength: 3,
				maxlength: 3
			}
		},
		//messages to display in case of error
		messages: {
			"your-name": {
				required: "Please enter your first and last name",
				maxlength: jQuery.validator.format("127 characters max")
			},
			
			"your-address": {
				required: "Please enter your address"
			},
			
			"your-city": {
				required: "Please enter your city"
			},
			
			"your-state": {
				required: "Please enter your state",
				minlength: jQuery.validator.format("Please enter your 2-digit state abbreviation"),
				maxlength: jQuery.validator.format("Please enter your 2-digit state abbreviation")
			},
			
			"your-zip": {
				required: "Please enter your zip code",
				digits: jQuery.validator.format("Please enter your 5-digit zip code")
			},
			
			"card-holder-name": {
				required: "Please enter your first and last name",	
				maxlength: jQuery.validator.format("127 characters max")
			},
			
			"card-number": {
				required: "Please enter your 16-digit credit card number",
				maxlength: jQuery.validator.format("Please enter your 16-digit credit card number")
			},
			
			"expiry-month": {
				required: "Please enter the expiration date"
			},
			
			"cvv": {
				required: "Please enter the 3-digit security code",
				digits: jQuery.validator.format("Please enter the 3-digit security code"),
				maxlength: "Please enter the 3-digit security code",
				minlength: "Please enter the 3-digit security code"
			}
		}
	});
});