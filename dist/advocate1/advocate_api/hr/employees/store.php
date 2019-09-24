<?php
require '../../connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->data->name) === '' || trim($request->data->gender) === '' || trim($request->data->email) === '' || trim($request->data->username) === '' || trim($request->data->phone) === '' || trim($request->data->address) === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $name = mysqli_real_escape_string($con, trim($request->data->name));
  //$profile_pic = mysqli_real_escape_string($con, trim($request->data->profile_pic));
  $gender = mysqli_real_escape_string($con, $request->data->gender);
  $dob = mysqli_real_escape_string($con, $request->data->dob);
  $user_role=mysqli_real_escape_string($con, $request->data->user_role);
  $department=mysqli_real_escape_string($con, $request->data->department);
  $designation=mysqli_real_escape_string($con, $request->data->designation);
  $doj=mysqli_real_escape_string($con, $request->data->doj);
  $join_salary=mysqli_real_escape_string($con, $request->data->join_salary);
  $email = mysqli_real_escape_string($con, $request->data->email);
  $username = mysqli_real_escape_string($con, $request->data->username);
  $password = md5(mysqli_real_escape_string($con, $request->data->password));
  $phone = mysqli_real_escape_string($con, $request->data->phone);
  $address = mysqli_real_escape_string($con, $request->data->address);
  $status=mysqli_real_escape_string($con, $request->data->stat);
  
  

    

  // Store.
  $sql = "INSERT INTO `employees`(`id`, `name`, `profile_pic`, `gender`, `dob`, `user_role`, `departments`, `designation`, `doj`, `join_salary`, `email`, `username`, `password`, `phone`, `address`, `status`, `added_by`) VALUES (null, '{$name}', 'null', '{$gender}', '{$dob}', '{$user_role}', '{$department}', '{$designation}', '{$doj}', '{$join_salary}', '{$email}','{$username}','{$password}','{$phone}','{$address}', '{$status}','1')";
//echo $sql;die();
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $add = [
	  'name' => $name,
      'gender' => $gender,
      'dob' => $dob,
      'email' => $email,
      'username' => $username,
      'password' => $password,
      'phone' => $phone,
      'address' => $address,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$add]);
  }
  else
  {
    http_response_code(422);
  }
}