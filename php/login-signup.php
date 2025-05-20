<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        
        if ($email && $password) {
            echo "Login successful for $email!";
        } else {
            echo "Invalid login credentials.";
        }
    } elseif (isset($_POST['signup'])) {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        

        if ($username && $email && $password) {
            echo "Signup successful for $username!";
        } else {
            echo "Invalid signup data.";
        }
    } else {
        echo "Invalid request.";
    }
} else {
    echo "Invalid request method.";
}
?>