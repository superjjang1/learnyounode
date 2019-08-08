// console.log("HELLO WORLD");





//2
// let total = 0;
// //
// for (var i = 2; i < process.argv.length; i++) {

//     total += Number(process.argv[i]);
// }

// console.log(total);
//3
// var fs = require('fs')
// var buffer = fs.readFileSync(process.argv[2]);
// var str = buffer.toString().split('\n');
// console.log(str.length -1);

//4
// var fs = require('fs')
// var buffer = fs.readFile(process.argv[2], 'utf-8', function(err, data){
//     if (err){
//         throw err;
//     }
//     var str = data.split('\n');
//     console.log(str.length -1);
// });

//5

// var fs = require('fs'),
//     path = require('path'),
//     pathToFiles = process.argv[2],
//     ext = '.' + process.argv[3];

// fs.readdir(pathToFiles, function(err, files){
//     files.reduce(function(prev, curr, index, arr) {
//         if (path.extname(curr) === ext) {
//             prev.push(curr);
//             console.log(curr);
//         }
//         return prev;
//     }, []);

//6

var mod = require('./module'),
    pathToFiles = process.argv[2],
    ext = process.argv[3];
mod(pathToFiles, ext, function(err,files){
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(function(file) {
        console.log(file);
    });
});