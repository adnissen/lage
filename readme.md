# Lage.js
*(German for 'location', or so I'm told by Google)*

## Tiny Client-Side Location Data
Lage.js is a client-side javascript library that only has one function: to get all the location data you could ever want from an ip address. With an extremely simple api, with **only 7 methods** and weighing in at **less than 1kb**, it's the perfect fit for your custom analytics solution.

## Usage
### Examples
```
<script src="lage.js"></script>
var Lage = new Lage('50.164.213.171');

Lage.getState(); 
>> 'New Hampshire'
Lage.getCity(); 
>> 'Merrimack'
Lage.getLatitude();
>> 42.8502
```
### Methods
**getFullAddress**: returns full address, formatted as ```Street Adress, City, State Zip, Country```

**getCity**: returns city

**getZip**: returns zip

**getCountry**: returns country

**getState**:  returns state

**getLatitude**: returns latitude

**getLongitude**: returns longitude


## 100% Open Source. Even the Server.
If you don't like the way I did things, you have lots of options. Both lage.js and lage-server (also very small) are fully open-sourced under MIT, so feel free to take a look at those and make them do what you'd like. Not only that, but you can write a client in a language of your choosing by simply making a call to the web api:

```
http://lage-server.herokuapp.com/lookip?ip=0.0.0.0
>> returns a json object with all of the info above
```

That's it! You get a small json object with all of the information I talk about above, and it's yours to use as you like.

## Tiny Disclaimer
I can't promise that all this location data is going to be accurrate. In fact, it's probably not going to get the exact street address correct every single time. In my tests, the result was always within a few streets, which definitely makes it usable. I also can't say I'll know what'll happen outside the USA. Something will get returned, but you'll have to figure out the data yourself. Enjoy!
