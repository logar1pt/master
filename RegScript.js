var xmlHttp = new XMLHttpRequest();
if (!xmlHttp) {
    alert('Error creating the XMLHttpRequest');
}
function request () {
    if (xmlHttp.readyState == 4 || xmlHttp.status == 0) {
        var name = document.all("Login").value;
        xmlHttp.open('GET', "RegScript.php?login=" + name, true);
        xmlHttp.onreadystatechange = ResponseHandler;
        xmlHttp.send(null);
    } else {
        setTimeout("request()", 1000);
    }
}

function ResponseHandler() {
    if (xmlHttp.readyState == 4) {

    }
}