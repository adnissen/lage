function Lage(ip){
  request = new XMLHttpRequest();
  request.open('GET', 'http://lage-server.herokuapp.com/lookup?ip=' + ip, true);
  loc = {};
  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      // Success!
      loc = JSON.parse(request.responseText);
    }
  };
  this.getLoc = function(){
    return loc;
  }
  request.send();
}
Lage.prototype.getFullAddress = function(){
  return this.getLoc().address;
};
Lage.prototype.getCity = function(){
  return this.getLoc().city;
};
Lage.prototype.getZip = function(){
  return this.getLoc().zip;
};
Lage.prototype.getCountry = function(){
  return this.getLoc().country;
};
Lage.prototype.getState = function(){
  return this.getLoc().state;
};
Lage.prototype.getLatitude= function(){
  return this.getLoc().lat;
};
Lage.prototype.getLongitude = function(){
  return this.getLoc().lng;
};
