<?php
    if (isset($_POST['submit']) && $_POST['email']!='' && $_POST['name']!='' && $_POST['subject']!='') {
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo = "info@oltgvshi.com";
        $headers = "From: ".$mailFrom;
        $txt = "You've received an email from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header('Location: index.html?emailsent');
    }

    else{
        header('Location: index.html?error');
    }
?>