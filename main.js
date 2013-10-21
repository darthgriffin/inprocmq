// npm libs
var queue = require('minimal-queue');

// custom modules
var liba = require('liba');
var libb = require('libb');

// establish global main queue
mainQueue = queue.up(function(msg){

	var job = this;
	
    // send message to all libs
    console.log("main processing " + JSON.stringify(msg));
    liba.processMessage(msg);
    libb.processMessage(msg);
	
	job.done();

});
mainQueue.concurrency = 1;

// startup sequence
console.log("** starting inprocmq **");

// init custom modules
liba.init();
libb.init();


