<?php
    require_once('connect.php');
    session_start();

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $message = array();

    $student_number = $data ['student_number'];
    $student_name = $data ['student_name'];
    $email = $data ['email'];
    $contact_number = $data ['contact_number'];
    $home_address = $data ['home_address'];

    //create the sql query
    $query = mysqli_query($con, "insert into students_tbl(student_number, student_name, email, contact_number,home_address, reg_date) values('$student_number', '$student_name', '$email', '$contact_number', '$home_address', NOW())");
    if($query){
        http_response_code(201);
        $message['status'] = "Success....";
    }else{
        http_response_code(422);
        $message['status'] = 'Error....';
    }

    echo json_encode($message);
    echo mysqli_error($con);
?>