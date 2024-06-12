var X1 = 100;
console.log("X1 = ",X1);  //100
function F1()
{
    var Y = 200;
    console.log("Y = ",Y); // Y = 200;
    if(Y > 100)
    {
        console.log("Y = (Inside IF)",Y); // Y = 200;
        var Z = 300;
        console.log("Z (Inside IF Block)= ",Z);   // Z = 300
    }
    console.log("Y = (Outside IF)",Y); // Y = 200;
    console.log("Z (Outside IF block)= ",Z);   // Z = 300
}
 
F1();