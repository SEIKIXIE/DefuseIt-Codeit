<?php
    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $DOB = $_POST['DOB'];
    $gender = $_POST['gender'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

    $conn = new mysqli('localhost', 'root', '', 'profile');
    if($conn->connect_error){
        die('Connection failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(FirstName, LastName, gender, DOB, Email, Password)values(?,?,?,?,?,?)");
        $stmt->bind_param("sssiss",$FirstName, $LastName, $gender, $DOB, $Email, $Password);
        $stmt->execute();
        echo "Registration Successfully";
        $stmt->close();
        $conn->close();
    }
?>