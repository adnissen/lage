function Lage(ip){
  request = new XMLHttpRequest();
  request.open('GET', 'http://lage-server.herokuapp.com/lookup?ip=' + ip, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      // Success!
      var loc = JSON.parse(request.responseText);
    }
  };

  request.send();
}
Lage.prototype.getFullAddress = function(){
  return loc.address;
};
Lage.prototype.getCity = function(){
  return loc.city;
};
Lage.prototype.getZip = function(){
  return loc.zip;
};
Lage.prototype.getCountry = function(){
  return loc.country;
};
Lage.prototype.getState = function(){
  return loc.state;
};
Lage.prototype.getLat = function(){
  return loc.lat;
};
Lage.prototype.getLong = function(){
  return loc.lng;
};
