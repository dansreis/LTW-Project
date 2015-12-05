$(document).ready(onReady);

function onReady() {
	$('#message').hide();

	startButtons();

	$('#leave').click(onLeaveClick);
	$('#edit').click(onEditClick);
	$('#delete').click(onDeleteClick);
};

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
		showValidation(data);
		if(data['error'] == null)
			setTimeout(function(){window.document.location.href = '../Pages/myEventsPage.php';}, 1000);
			
	})
    .fail(function (error) {
        console.log("Error: " + error);
    });
}

function onEditClick(event) {
	var eventID = $('#eventID').val();
	
	$.post(
    '../Server/manageEvent.php',
	{ 
		"functionName" : 'edit',
		"eventID": eventID
	}, 
	function (data) {
		showValidation(data);
		if(data['error'] == null){
			return;
		}			
	})
    .fail(function (error) {
        console.log("Error: " + error);
    });
}

function onDeleteClick(event) {
	if(!confirm('Deleting an event is irreversible. Are you sure you wish to delete this event?') )
		return;

	var eventID = $('#eventID').val();
	
	$.post(
    '../Server/manageEvent.php',
	{ 
		"functionName" : 'delete',
		"eventID": eventID
	}, 
	function (data) {
		showValidation(data);
		if(data['error'] == null)
			setTimeout(function(){window.document.location.href = '../Pages/myEventsPage.php';}, 1000);
			
	})
    .fail(function (error) {
        console.log("Error: " + error);
    });
}

function showValidation(data) {
	$('#message').show();

	if (data['error'] != null)
		{
			$('#message').css('background-color','#ff6666');
			$('#message').html(data['error']);
		}
	else
		{
			$('#message').css('background-color','#99ff99');
			$('#message').html(data['message']);
		}
}

function startButtons() {
	var eventID = $('#eventID').val();
	
	$.post(
    '../Server/checkIfHost.php',
	{ 
		"eventID": eventID
	}, 
	function (data) {
		if(data['error'] != null){
			alert(data['error']);
			return;
		}

		if(data['message'] == null || data['message'] == ""){
			alert('Oops, something went wrong!! Going back to your events.');
			setTimeout(function(){window.document.location.href = '../Pages/myEventsPage.php';}, 100);
			return;
		}

		if(data['message'] == 'Host'){
			$('#leave').hide();
			$('#edit').show();
			$('#delete').show();
		}
		else if(data['message'] == 'Guest'){
			$('#leave').show();
			$('#edit').hide();
			$('#delete').hide();
		}
	})
    .fail(function (error) {
        console.error("Error: " + error);
    });
}
