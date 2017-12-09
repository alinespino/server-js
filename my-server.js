
var http = require ("http");
var PORT1= 7000;
var PORT2=7500;

function handleGoodReq (req, res) {
    resp.end ("GOOD");
};

function handleBadReq (req, res) {
    resp.end ("BAD");
};


var server1 = http.createServer (handleGoodReq);


var server2 = http.createServer(handleBadReq);

server1.listen(PORT1, function(){
    console.log("GOOD SERVER")
})

server2.listen(PORT2, function(){
    console.log("BAD SERVER")
})

