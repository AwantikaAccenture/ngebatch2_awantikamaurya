var Employee = function (empno:number , empname:string)
               {
                 this.empno=empno;
				 this.empname=empname;
                 this.DisplayEmployeeDetails =  function ()
                 {
                  //==================
                 };
               };
 
var ASE = function (designation:string , relocationAllowance:number)
               {
                 this.designation=designation;
				 this.relocationAllowance=relocationAllowance;
                 this.DisplayASEDetails =  function ()
                 {
                  console.log("********** Employee Details **********************");
                 //======================
                 };
               }; 
var emp = new Employee(1231,"Accenture");            // Parent Object Created
ASE.prototype = emp;   //extends                              // Parent-Child Relationship Created between Employee-ASE
var ase = new ASE("ASE",2500);                       // Child Class Object Created