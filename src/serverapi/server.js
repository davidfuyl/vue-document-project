var express = require('express');//引用express
var app = express();
var bodyParser = require('body-parser'); //引用bodyParser

// 创建数据库连接
const mysql = require('mysql')
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql0316',
    database:'mydoctable'
})

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended:true})); //for parsing application/x-www-form-urlencoded

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });

//创建一个connection
conn.connect(function(err){
    if(err){       
        console.log('[query] - :'+ err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

 //新增文档接口
 app.post('/addNewDoc',function(req,res){


 })
 //删除文档
 app.get('deleteDoc',function(req,res){

 });

 //更新文档
 app.post('updateDoc',function(req,res){

 })

 //查询文档
 app.post('searchDoc',function(req,res){

 });

 //配置服务端口
var server = app.listen(3001, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})