<?php
/**
 * Returns the list of cars.
 */
require '../../connect.php';
    
$todolist = [];
$sql = "SELECT id,name,user_role,status  FROM employees WHERE user_role!='3' ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
   $todolist[$cr]['id']      = $row['id'];
	$todolist[$cr]['name'] = $row['name'];
    $todolist[$cr]['user_role']   = $row['user_role'];
    $todolist[$cr]['status']   = $row['status'];

    $cr++;
  }
    
  echo json_encode(['data'=>$todolist]);
}
else
{
  http_response_code(404);
}