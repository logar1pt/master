<?php
$q = $_REQUEST["id"];
echo $q;
//var_dump(json_decode($q, true));
$str = json_decode($q, true);
echo $str["title"];
?>