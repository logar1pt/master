var output = "";
function createJSON() {
    var event = {
        maxPeople : $j('#itemMaxPeople').text(),
        HealthPeople : $j('#itemHealthPeople').text(),
        SickPeople : $j('#itemSickPeople').text()
    }
    var sendXMLfile = JSON.stringify(event);
    return sendXMLfile;
}
