const interval = setInterval(() => {
    console.log("Hi");
    clearInterval(interval); 
}, 2000);

console.log("I will run first");



//process stays alive unless we stop it manually (ctrl + c) or we have no more work to do
//in this case, we have setInterval, so it will run forever every 2 seconds
//to stop it after some time, we can use clearInterval