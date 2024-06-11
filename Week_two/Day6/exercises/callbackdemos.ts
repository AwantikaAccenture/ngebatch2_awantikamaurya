//setTimeout(function,timeinms)

console.log("Before set timeout fn");

// new Promise(resolve,reject)

setTimeout(() => {
   console.log("Set timeout is invoked ");
    
}, 1000);

console.log("After settimeout fn");



setInterval(()=>{
    console.log("Set interval is invoked");
    
},2000)


setImmediate(()=>{
    console.log("Immediate is invoked");
    
})