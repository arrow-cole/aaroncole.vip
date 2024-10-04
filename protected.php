<?php
// Define your password (you can hash it for better security)
$correct_password = 'mypassword';

// Check if the form has been submitted
if (isset($_POST['password'])) {
    $entered_password = $_POST['password'];

    // Check if the entered password is correct
    if ($entered_password === $correct_password) {
        // Display the protected content
        echo "<h1>Welcome to the protected page!</h1>";
        echo "<p>This content is password protected.</p>";
    } else {
        // Redirect back to the form with an error message
        echo "<h2>Incorrect password. Try again.</h2>";
        echo '<a href="index.html">Go back</a>';
    }
} else {
    // If accessed directly without the form submission, redirect to the form
    header("Location: coming-soon.html");
    exit();
}
?>
