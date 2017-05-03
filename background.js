// var request = require('request');

// request.get('http://bit.ly/saharan/',function(error,res,body){
// 	console.log(res.client._host + res.client._httpMessage.path)
// });


console.log("aa riya hai");
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.example.com/data.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // WARNING! Might be evaluating an evil script!
    var resp = eval("(" + xhr.responseText + ")");
    console.log(xhr.responseText);
  }
}
xhr.send();