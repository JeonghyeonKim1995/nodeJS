
/* 서버 오픈 기본 문법 */
const express = require('express');
const cors = require("cors");
const app = express();

const port = 8070;

app.use(cors());

app.listen(port, function(){
    console.log('listening on 8070');
});
/* 서버 오픈 기본 문법 */

/* 도메인 변경시 요청 */
/* req: 요청 */
/* res: 응답 */

/* index.html */
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html');
});


app.get('/sound/:name', function(req, res){
    const { name } = req.params;
    let sound = "";
    if(name == "dog") {
        sound = "멍멍";
    } else if(name == "cat") {
        sound = "야옹";
    } else {
        sound = "알수없음";
    }

    res.send(sound);
});