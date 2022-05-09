const fs = require('fs')
// none async none bloking thread
fs.readdir('./',(err,files)=>{
  console.log(err)
  console.log(files)
})
//sync bloking thread
console.log(fs.readdirSync('./'))

//////////// Events //////////////

const Events = require('events');
const emitter = new Events();

emitter.on('bell',(e)=>{console.log("Open the door");console.log(e)});

emitter.emit('bell',{time:Date.now(),count:2});

/////////////////////////////////

//////////// HTTP //////////////

const http = require('http');
const { json } = require('stream/consumers');
const server = http.createServer((req,res)=>{
console.log(req.url)
res.write(JSON.stringify({p:['p1','p2']}))
res.end()
});
server.listen(3000)


/////////////////////////////////

//////////// jalali moment //////////////

const moment = require('jalali-moment');
console.log(moment(new Date()).locale('fa').format('YYYY/MM/DD'));

//////////////////////////////////////