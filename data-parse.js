var fs = require('fs');
var data = require('./test.json');


var parsed_data = {
  type: "FeatureCollection",
  features: data.features.map(function(county){
    return {
      type: "Feature",
      properties: {
        name: county.properties.name,
        start: (new Date(
          county.properties.year + '-' +
          county.properties.month + '-' +
          county.properties.day
        )).getTime(),
        end: (new Date(
          county.properties.year + '-' +
          county.properties.month + '-' +
          county.properties.day+1
        )).getTime()
      },
      geometry: county.geometry
    };
  })
};

fs.writeFile('test.jsonp', 'onLoadData(' + JSON.stringify(parsed_data) + ');');
