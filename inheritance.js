// Employee constructor function (parent class)
var Employee = function(name)
{
    this.name = name;
    this.getName = function() 
    {
        return this.name;
    }
}

// Salary constructor function (child class)
var Salary = function(salary)
{
    this.salary = salary;
}


Salary.prototype = new Employee("Vishrut Mishra");  // inheritance step
var sal = new Salary(60000);
console.log(sal.getName());

