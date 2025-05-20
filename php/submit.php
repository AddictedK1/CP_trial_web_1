<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['code'])) {
    $code = $_POST['code'];
    // for now no actual database :(
    echo "Code received and processed successfully!";
} else {
    echo "Invalid submission.";
}
?>
