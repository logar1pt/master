<php ?
header('Content-Type: text/xml');
echo '<?xml version="1.0" ?>';
echo '<responce>';
$login = $_GET['login'];
$userNames = array('PETYA', 'SERGEY', 'IVAN', 'MASHA', 'LENA');
if (in_array(strtoupper($login), $userNames)) echo 'Hello user' + $login + '!';
else if (trim($login) == '') echo 'Empty login';
else echo $login + ' - unreginstered user';
echo '</response>';
?>