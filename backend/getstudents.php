<?php
require_once('connect.php');
//session_start();

$data = array();

$query = "select * from students_tbl";
$result = mysqli_query($con, $query);

while($row = mysqli_fetch_object($result)){
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);

?>