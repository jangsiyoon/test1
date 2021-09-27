const express = require('express');

const app = express();

app.get('/', (rep, res) => {
    res.send('hello express');
});

app.listen(3000,() => {
    console.log('익스프레스 서버 실행');
});