<?php
if(isset( $_GET['name']))
{
$name = $_GET['name'];
$email = $_GET['email'];
$number = $_GET['number'];
$message = $_GET['message'];

$to = "support@valueaddrealty.in";
//$to = "info@rajviha.com";
    $subject = "client has requested certain details";

$message = "
Name: $name
Email: $email
Contact Number: $number

Message : $message 
";

$headers = "From: ValueAddRealty Customers " ;
mail($to,$subject,$message,$headers);
if(mail)
{
echo "success";

}
else
{
?>
<script type="text/javascript">
    alert("Something went Wrong");
    history.back();
  </script>
  <?php
}
}
if(isset( $_GET['firstname']))
{
$firstname = $_GET['firstname'];
$lastname = $_GET['lastname'];    
$email = $_GET['email'];
$number = $_GET['number'];
$message = $_GET['message'];

$to = "support@valueaddrealty.in";
//$to = "info@rajviha.com";
    $subject = "client has requested certain details";

$message = "
Name: $firstname . $lastname
Email: $email

Contact Number: $number

Message : $message 
";

$headers = "From: ValueAddRealty Customers " ;
mail($to,$subject,$message,$headers);
if(mail)
{
echo "success";

}
else
{
?>
<script type="text/javascript">
    alert("Something went Wrong");
    history.back();
  </script>
  <?php
}
}
?>
