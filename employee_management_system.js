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

/**
  Sets up departments, adds employees and managers, and calculates salary expenditures.
  
  Creates a company structure with departments, adds employees and managers to departments,
  and calculates both total salary and salary including bonuses.
 */
function setupCompany() {
    // Create departments
    const ITDepartment = new Department('IT');
    const HRDepartment = new Department('HR');

    // Create employees and managers
    const employee1 = new Employee('John Doe', 50000, 'Developer', 'IT');
    const employee2 = new Employee('Jane Smith', 60000, 'Designer', 'IT');
    const manager1 = new Manager('Michael Scott', 80000, 'Manager', 'IT', 10000);
    const employee3 = new Employee('Sarah Connor', 70000, 'Recruiter', 'HR');
    const manager2 = new Manager('Miranda Priestly', 90000, 'Manager', 'HR', 8000);

    // Add employees and managers to departments
    ITDepartment.addEmployee(employee1);
    ITDepartment.addEmployee(employee2);
    ITDepartment.addEmployee(manager1);
    HRDepartment.addEmployee(employee3);
    HRDepartment.addEmployee(manager2);

    // Calculate total salary and salary with bonuses
    console.log(`IT Department Salary: $${ITDepartment.getDepartmentSalary()}`);
    console.log(`IT Department Total Salary with Bonuses: $${ITDepartment.calculateTotalSalaryWithBonus()}`);
    console.log(`HR Department Salary: $${HRDepartment.getDepartmentSalary()}`);
    console.log(`HR Department Total Salary with Bonuses: $${HRDepartment.calculateTotalSalaryWithBonus()}`);
}

