$(document).ready(onReady);

function onReady() {
	updateLoginForm();
	$('#login').click(updateLoginForm);
	$('#register').click(updateLoginForm);

	$('#submitLog').click(onButtonClick);
	$('#submitReg').click(onButtonClick);

	$('#validationForm').submit(
		function(event) {
		event.preventDefault();
		onFormSubmission(event);
	}
	);

};

function updateLoginForm() {
	if ($('#login').is(':checked')){
		$('#verPassLabel').hide();
		$('#verPassLabel').next().hide();

		$('#verifyPassword').hide();
		$('#verifyPassword').next().hide();

		$('#emailLabel').hide();
		$('#emailLabel').next().hide();

		$('#email').hide();
		$('#email').next().hide();

		$('#submitLog').show();
		$('#submitReg').hide();

	 }
	else if($('#register').is(':checked')){
		$('#verPassLabel').show();
		$('#verPassLabel').next().show();

		$('#verifyPassword').show();
		$('#verifyPassword').next().show();

		$('#emailLabel').show();
		$('#emailLabel').next().show();

		$('#email').show();
		$('#email').next().show();

		$('#submitLog').hide();
		$('#submitReg').show();
	}
}

function onButtonClick() {
	$('#validationForm').submit();
}

function onFormSubmission(event) {
	if ($('#login').is(':checked'))
		logIn();

	else if ($('#register').is(':checked'))
		register();
}

function logIn() {
	var username = $('#username').val();
	console.log(username);
	var password = $('#password').val();
	console.log(password);

	$.post(
    'http://localhost/LTW/Projeto%20LTW/Web%20Page/scripts/validateLoginCredentials.php',
	{
		"functionName": 'login', 
		"username": username,
		"password": password
	}, 
	function (data) {
		alert("Username: " + data['username']);
		alert("Password: " + data['password']);
		alert("Error: " + data['error']);		
    })
    .fail(function (error) {
        alert("Sim");
        alert(error);
    });

}

function register() {
	alert("Registering...");
	//Create database entry if information is valid.
}