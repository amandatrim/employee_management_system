/**
  Represents an employee in the company.
 
  @class Employee
  @param {string} name - The name of the employee.
  @param {number} salary - The salary of the employee.
  @param {string} position - The position held by the employee.
  @param {string} department - The department the employee belongs to.

 */
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    /**
     Returns employee details (name, position, salary).
      
      @returns {string} - A string containing the employee's name, position, and salary.
     */
    getDetails() {
        return `${this.name}, ${this.position}, $${this.salary}`;
    }
}
