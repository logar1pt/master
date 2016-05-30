<?php
$user = $_REQUEST["login"];
$email = $_REQUEST["email"];
if ($user !== "") {
	echo "Hello, $user";
} else {
	echo "Hi, $email";
}

?>