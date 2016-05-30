<?php
$strXML = <<<XML
<?xml version="1.0" ?>
<Village>
</Village>
XML;
$xmlNew = new SimpleXMLElement($strXML);
$xmlPeople = $xmlNew->addChild('People');
$xmlPeople->addChild('MaxPeople', "100");
$xmlPeople->addChild('HealthyPeople', "70");
$xmlPeople->addChild('SickPeople', "30");
$xmlBuild = $xmlNew->addChild('Build');
$xmlBuild->addChild('BuildName', "Policy");
$xmlBuild->addChild('BuildCount', "3");
$xmlNew->saveXML("temp.xml");

?>