$(document).ready(onReady);
this.editOpen = true;

function onReady() {
	$('#message').hide();
	$('#message1').hide();
	$('#inviteMessage').hide();

	var following = $('#following').val();
	$('.editInfoForm').hide();
	$('#inviteUser').hide();

	if($('#userID').val() != $('#hostID').val())
	{
		$('#invite').hide();
		$('#delete').hide();
		$('#edit').hide();

		if(following == "1")
			$('#join').hide();
		else $('#leave').hide();
	}
	else {
		$('#join').hide();
		$('#leave').hide();
		}

	$('#edit').click(onEditClick);
	$('#leave').click(onLeaveClick);
	$('#delete').click(onDeleteClick);
	$('#join').click(onJoinClick);
	$('#invite').click(onInviteClick);
	$('#sendInvite').click(onSendInviteClick);
	$('#cancelInvite').click(onCancelInviteClick);
	$('#inviteForm').submit(
		function(event) {
		event.preventDefault();
		onInviteSubmit(event); 
	});

	$('#addComment').click(onComment);
	$('#editInfoForm').submit( function( e ) {
	    $.ajax( {
	      url: '../Server/editEventInfo.php',
	      type: 'POST',
	      data: new FormData( this ),
	      processData: false,
	      contentType: false,
	      success: function(response) {
	      			showInputValidation(response);
	            }

		} );
	
		e.preventDefault();
	} );
};

function onComment(event){
	var eventID = $('#eventID').val();
	var commentary = $('#userComment').val();

	$.post(
		'../Server/addComment.php',
		{ 
			"eventID": eventID,
			"commentary": commentary
		}, 
		function (data) {
			showInputValidation1(data);
			if(data['error'] == null)
				setTimeout(function(){window.document.location.href = '../Pages/eventPage.php?id=' + eventID;}, 1000);

		})
	.fail(function (error) {
		console.error("Error: " + error);
	});
}


function onLeaveClick(event) {
	if(!confirm('Are you sure you wish to leave the event?') )
		return;

	var eventID = $('#eventID').val();
	
	$.post(
    '../Server/manageEvent.php',
	{ 
		"functionName" : 'leave',
		"eventID": eventID
	}, 
	function (data) {
		showInputValidation1(data);
		if(data['error'] == null)
			setTimeout(function(){window.document.location.href = '../Pages/myEventsPage.php';}, 1000);
			
	})
    .fail(function (error) {
        console.error("Error: " + error);
    });
}

function onEditClick(event) {
	if(!this.open)
	{
		$('#edit').css('box-shadow', '0px 0px 10px #feff00');
		$('.editInfoForm').show();
		this.open = true;
	}
	else
	{
		$('#edit').css('box-shadow', 'none');
		$('.editInfoForm').hide();
		this.open = false;
		clearForm();
	}
}

function onDeleteClick(event) {
	if(!confirm('Deleting an event is irreversible. Are you sure you wish to delete this event?') )
		return;

	var eventID = $('#eventID').val();
	console.log(eventID);
	$.post(
    '../Server/manageEvent.php',
	{ 
		"functionName" : 'delete',
		"eventID": eventID
	}, 
	function (data) {
		showInputValidation1(data);
		if(data['error'] == null)
			setTimeout(function(){window.document.location.href = '../Pages/myEventsPage.php';}, 1000);
			
	})
    .fail(function (error) {
        console.error("Error: " + error);
    });
}


function onJoinClick(event) {
	if(!confirm('Are you sure you wish to join the event?') )
		return;

	var eventID = $('#eventID').val();

	
	$.post(
    '../Server/manageEvent.php',
	{ 
		"functionName" : 'join',
		"eventID": eventID
	}, 
	function (data) {
		showInputValidation1(data);
		if(data['error'] == null)
			setTimeout(function(){window.document.location.href = '../Pages/myEventsPage.php';}, 1000);
			
	})
    .fail(function (error) {
        console.error("Error: " + error);
    });
}

function onInviteClick(event) {
	$('#inviteUser').show();
}

function onSendInviteClick(event) {
	var eventID = $('#eventID').val();

	$('#inviteForm').submit();
}

function onCancelInviteClick(event){
	location.reload();
}


function showInputValidation(data) {
	$('#message').show();

	if (data['error'] != null)
	{
		$('#message').css('background-color','#ff6666');
		$('#message').html(data['error']);
	}
	else
	{
		$('#message').css('background-color','#99ff99');
		$('#message').html(data['success']);
	}
}

function showInputValidation1(data) {
	$('#message1').show();

	if (data['error'] != null)
	{
		$('#message1').css('background-color','#ff6666');
		$('#message1').html(data['error']);
	}
	else
	{
		$('#message1').css('background-color','#99ff99');
		$('#message1').html(data['success']);
	}
}

function showInviteValidation(data) {
	$('#inviteMessage').show();

	if (data['error'] != null)
	{
		$('#inviteMessage').css('background-color','#ff6666');
		$('#inviteMessage').html(data['error']);
	}
	else
	{
		$('#inviteMessage').css('background-color','#99ff99');
		$('#inviteMessage').html(data['success']);
	}
}


function onInviteSubmit(event) {
	var invitedUsername = $('#invitedUsername').val();
	var eventID = $('#eventID').val();

	$.post(
    '../Server/manageEvent.php',
	{ 
		"functionName" : 'invite',
		"invitedUsername" : invitedUsername,
		"eventID": eventID
	}, 
	function (data) {
		showInviteValidation(data);
		$('#inviteMessage').fadeOut(2000);
		if(data['error'] == null)
			setTimeout(function() {location.reload();}, 2000);


	})
    .fail(function (error) {
        console.error("Error: " + error);
    });


}

function clearForm(){
	$('#name').val("");
	$('#photo').val("");
	$('#editdescription').val("");
	$('#location').val("");
	$('#date').val("");
	$('#invitedUsername').val("");
}


