var fs = require('fs');
var ical2json = require('ical2json');
var replace = require('replace');

fs.readFile('mijnRooster.ics', 'utf8', function(err, data){
  if(err) throw err;
  var data = String(data);
  data = data.replace(/[\[\]']+/g, ""); // Replace [ and ]
  data = data.replace(/les/g, ""); // Replace 'les'
  data = data.replace(/CG5.+?(?=[0-9])/g, ""); // Replace CG5.*
  data = data.replace(/CG5C.+?(?=[0-9])/g, ""); // Replace CG5.*
  data = data.replace(/CG5C\s;\s/g, "");
  data = data.replace(/[0-9]\s;\s/g, "");
  data = data.toUpperCase(); // Uppercase everything
  data = data.replace(/;/g, "van");

  fs.writeFile('rooster.ics', data, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
});
