var Employee = function(name)
{
    var instance = this;

    this.name = name;
    this.getName = function()
    {
        return this.name;
    }

    Employee = function()
    {
        return instance;
    }
}

var emp1 = new Employee("xyz");
var emp2 = new Employee("abc");

console.log(emp1 === emp2);     // true
console.log(emp2.getName());    // xyz
console.log(emp1.getName());    // xyz