<?php
require_once('connect.php');

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$student_number = $data['student_number'];
$student_name = $data['student_name'];
$email = $data['email'];
$contact_number = $data['contact_number'];
$home_address = $data['home_address'];
$id = $_GET['id'];

$query = mysqli_query($con, "update students_tbl set student_number = '$student_number', student_name = '$student_name', email = '$email', contact_number = '$contact_number', home_address = '$home_address' where id = '$id' LIMIT 1");

if($query){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);


?>

