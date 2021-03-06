<?php
require '../../connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  if(trim($request->data->leavetype) === '' || trim($request->data->description) === '' || trim($request->data->leaves) === '')
  {
    return http_response_code(400);
  }
    
  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->data->id);
  $leavetype = mysqli_real_escape_string($con, trim($request->data->leavetype));
  //$profile_pic = mysqli_real_escape_string($con, trim($request->data->profile_pic));
  $description = mysqli_real_escape_string($con, $request->data->description);
  $leaves = mysqli_real_escape_string($con, $request->data->leaves);
  // Update.
  $sql = "UPDATE `leaves` SET `leavetype`='{$leavetype}', `description`='{$description}', `leaves`='{$leaves}' WHERE `id` = '{$id}' LIMIT 1";
  //echo $sql;die();
  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
	echo json_encode(['output'=>true]);
  }
  else
  {
    return http_response_code(422);
  }  
}