var xmlHttp = new XMLHttpRequest();
if (!xmlHttp) {
    alert('Error creating the XMLHttpRequest');
}
function request () {
    if (xmlHttp.readyState == 4 || xmlHttp.status == 0) {
        var name = document.all("Login").value;
        xmlHttp.open('GET', "RegPHP.php?login=" + name, true);
        console.log('>>' + name);
        if (name) {
            xmlHttp.onreadystatechange = ResponseHandler;
            xmlHttp.send(null);
        } else {
            setTimeout("request()", 1000);
        }
    } else {
        setTimeout("request()", 1000);
    }
}

function ResponseHandler() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            xmlResponse = xmlHttp.responseXML;
            XMLDocumentElement = xmlResponse.documentElement;
            Response = XMLDocumentElement.firstChild.data;
            document.all("message").innerHTML = '<i>' + Response + '</i.>';
            setTimeout("request();", 1000);
        } else {
            alert("Ошибка доступа к серверу");
        }
    }
}