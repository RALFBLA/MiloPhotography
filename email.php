<?php //sending an email from the website to the photographer's website
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $sender_email = $_POST['email'];
    $message = $_POST['message'];
    $type = $_POST['type'];

    $email_from = "leolam2222@gmail.com";

    $email_subject = "New Form Submission";

    $email_body = "User Name: $fnam $lname \n"
                    "User Email: $sender_email \r\n"
                        "User Message: $message \n";

    $to = "RALFBLA2021@gmail.com"; //would be photographer email

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $sender_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");


?>
