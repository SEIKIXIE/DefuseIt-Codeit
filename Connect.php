<?php
// Increase memory limit
ini_set('memory_limit', '1024M');

include('Connect.php');

if (isset($_POST['submit_btn'])) {
    echo $FirstName = $_POST['FirstName'];
    echo $LastName = $_POST['LastName'];
    echo $DOB = $_POST['DOB'];
    echo $gender = $_POST['gender']; // Fixed the syntax error here
    echo $email = $_POST['email'];
    echo $password = $_POST['password'];

    // Corrected the SQL query syntax
    $query = "INSERT INTO game_data (FirstName, LastName, age, gender, email, password) VALUES ('$FirstName', '$LastName', '$DOB', '$gender', '$email', '$password')";
    $query_run = mysqli_query($con, $query);

    if ($query_run) {
        echo "Welcome player";
    } else {
        echo "Error";
    }
}
?>
