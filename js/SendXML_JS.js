function sendXML() {
    var xmlHttp = new XMLHttpRequest;
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

        }
    };
    xmlHttp.open("GET", "", true);
    xmlHttp.send();
}