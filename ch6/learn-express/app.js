const express = require('express');
const path = require('path');

const app = express(); // express를 실행시키고 별칭으로 app



app.set('port', process.env.PORT || 3000); //json 요청을 받겠다.

app.get('/', (rep, res) => {
   // res.send('hello express');
   res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'),() => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});