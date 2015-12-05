<?php
  header('Content-Type: application/json');
  
  include 'database.php';
  include 'session.php';
  
  $response = array();

  $session = new Session;
  if(!$session->isLoggedIn()){
  	printErrorMessage($response, 'Not logged in');
  	return;
  }

  if( $_POST['eventID'] == NULL ) {
    printErrorMessage($response, 'No eventID argument!');
    return;
  }

  $userID = $session->getUserID();
  $eventID = $_POST['eventID'];

  $database = new Database;
  if($database->isHost($userID, $eventID)){
  	printErrorMessage($response, 'You cannot leave an event you are hosting!');
  	return;
  }

  $database->removeUserFromEvent($userID, $eventID);
  $response['message'] = 'You have left the event';
  
  echo json_encode($response);

  function printErrorMessage($responseArray, $message) {
    $responseArray['error'] = $message;
    echo json_encode($responseArray);
    return;
  }
?>