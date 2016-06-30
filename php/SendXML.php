<?php
$q = $_REQUEST["pl"];
$str = json_decode($q, true);
$strXML = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<Village>
</Village>
XML;
$xmlNew = new SimpleXMLElement($strXML);
$xmlPeople = $xmlNew->addChild('People');
$xmlPeople->addChild('MaxPeople', $str['maxPeople']);
$xmlPeople->addChild('HealthyPeople', $str['HealthPeople']);
$xmlPeople->addChild('SickPeople', $str['SickPeople']);
$xmlBuild = $xmlNew->addChild('Build');
$xmlBuild->addChild('BuildName', "Policy");
$xmlBuild->addChild('BuildCount', "3");
$xmlNew->saveXML("temp.xml");

?>