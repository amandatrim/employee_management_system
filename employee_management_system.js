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

/**
  Represents a manager in the company, inheriting from Employee.
  
  @class Manager
  @extends Employee
  @param {string} name - The name of the manager.
  @param {number} salary - The salary of the manager.
  @param {string} position - The position of the manager.
  @param {string} department - The department the manager belongs to.
  @param {number} bonus - The bonus the manager receives.
 */
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }

    /**
      Returns manager details, including the bonus (name, position, salary, bonus).
      
      @returns {string} - A string containing the manager's name, position, salary, and bonus.
     */
    getDetails() {
        return `${this.name}, ${this.position}, $${this.salary}, Bonus: $${this.bonus}`;
    }
}

/**
  Calculates the total salary of a department including manager bonuses.
  This function is used to calculate the total salary expenditure with performance bonuses for managers.
  
  @param {Department} department - The department object containing employees and managers.
  @returns {number} - The total salary, including bonuses for managers, in the department.
 */
function calculateTotalSalaryWithBonus(department) {
    return department.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
            return total + employee.salary + employee.bonus;
        }
        return total + employee.salary;
    }, 0);
}
