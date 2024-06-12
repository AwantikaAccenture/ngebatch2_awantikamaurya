let x= 100;
function f1()
{
    console.log("before",x);
    let Y =200;
    console.log("before",Y);
    function Inner()
    {
console.log("sum",x+Y);
    }
    Inner();
    return Inner;
}
let RF = f1();
RF(); //closure........
