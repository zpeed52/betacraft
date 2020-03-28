(function(d) {

  function getData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.status == 200 && xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText);
        var online = data["players"]["online"];
        d.getElementById("online").innerHTML = online;
      }
    }
    xhr.open("GET", "https://eu.mc-api.net/v3/server/info/Play.Betacraft.Org", true);
    xhr.send();
  }
  getData();
  setInterval(function() {
		getData();
  }, 1000); // 1 saniye
  
})(document);

function modalGoster(url) {
  $.ajax({
    url: url,
    success: function(data) {
      $('#pModal').html(data);
      $('#pModal').modal("show");
    },
  });
  return false;
}