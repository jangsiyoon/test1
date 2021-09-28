const path = require('path');
const string = __filename;

// console.log('path.sep:', path.sep);
// console.log('path.deilmiter:', path.delimiter);
// console.log('--------------------------------------------');
// console.log('path.dirname():', path.dirname(string));
// console.log('path.extname():', path.extname(string));
// console.log('path.basename():', path.basename(string));
// console.log('path.basename - extname:', path.basename(string,path.extname(string)));
// console.log('--------------------------------------------');
// console.log('path.parse():', path.parse(string));
// console.log('path.format():', path.format({
//     dir: 'C:\\Users\\Neuru_siyoon\\Documents\\nodejs-book\\lecture',
//     name: 'path',
//     ext: 'js',
// }));
console.log(path.join(__dirname,'..','/var.js'));
console.log(path.resolve(__dirname,'..','/var.js')); 
console.log(__filename);

/* 
    path.join(__dirname, 'var.js');  \nodejs-book\lecture\var.js 이렇게 합쳐준다는 뜻.(window의 경우)
                                     /nodejs-book/lecture/var.js (Mac의 경우) --POSIX
    이렇게 운영체제에 맞게 알아서 경로구분자를 해주니까 path를 사용하는 이유이다.!!
*/