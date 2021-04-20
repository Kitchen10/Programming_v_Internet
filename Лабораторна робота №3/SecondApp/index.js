console.log("My second project")

let fs = require('fs');

fs.readFile('file.txt', 'utf-8', function(err, data){
  console.log(data);
})

fs.writeFile("web.txt", "JavaScript", function(err){
  if (err) throw err;
  console.log('Saved!');
});

