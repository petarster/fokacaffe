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
				alert("The username or password you've entered is false");
				$usernameInput.val("");
				$passInput.val("");
		   } else {
				window.location="menu.html"
		   }
		
		});