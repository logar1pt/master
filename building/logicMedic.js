var $j = jQuery.noConflict();
var maxPeople;
var healthPeople;
var sickPeople;
var getInfo = function () {
    maxPeople = $j('#maxPeople').val();
    healthPeople = $j('#healthPeople').val();
    sickPeople = $j('#sickPeople').val();
}
var setInfo = function () {
    $j('#maxPeople').val(maxPeople);
    $j('#healthPeople').val(healthPeople);
    $j('#sickPeople').val(sickPeople);
}
var startVirus = function () {
    getInfo();

    setInfo();
}
var changePeople = function () {
    
}