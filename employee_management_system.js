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

/**
  Represents a department within the company.
  
  @class Department
  @param {string} name - The name of the department.
  @param {array} employees - An array to store employees (Employee or Manager objects).
 */
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    /**
      Adds an employee to the department.
      
      @param {Employee|Manager} employee - The employee to add.
     */
    addEmployee(employee) {
        this.employees.push(employee);
    }

    /**
      Calculates the total salary of all employees in the department.
      
      @returns {number} - The total salary for the department.
     */
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }

    /**
      Calculates the total salary including bonuses for managers in the department.
      
      @returns {number} - The total salary including bonuses for the department.
     */
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) {
                return total + employee.salary + employee.bonus;
            }
            return total + employee.salary;
        }, 0);
    }
}
