<?php
    // Mail alert
    $to = 'anankitpatil@gmail.com';
    $subject = 'jaywantsugars.com Contact Form Submission '.$name;
    $message = 'Name: '.$name."\r\n".
        'Phone: '.$phone."\r\n".
        'E - mail: '.$email."\r\n".
        'Message: '.$message."\r\n".
        "\r\n".
        'jaywantsugars.com';
    $headers = 'From: jaywantsugars.com Contact Form <contact@jaywantsugars.com>'."\r\n".
        'Reply-To: '.$name.' <'.$email.">\r\n".
        'X-Mailer: PHP/'.phpversion();

    mail($to, $subject, $message, $headers);
