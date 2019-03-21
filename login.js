	   var username="1";
	   var password="1";

	   $(".login").click(function(e) {
		   e.preventDefault();
			$( "#login-form" ).fadeToggle(400);			
		});
		
		$(".submit").click(function(e) {
		   e.preventDefault();

		   var $usernameInput = $("#username");
		   var $passInput = $("#pass");
  
		   if($usernameInput.val() !== username || $passInput.val() !== password) {
				alert("Korisničko ime ili lozinka koje ste uneli je pogresna.");
				$usernameInput.val("");
				$passInput.val("");
		   } else {
				window.location="menu.html"
		   }
		
		});