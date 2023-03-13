const Employee = require('../lib/Employee');
//employee name
test('gets employee name', () => {
const employee = new Employee('Aaron', 1, 'aalexanderp6@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
//employee ID
test('gets employee ID', () => {
const employee = new Employee('Aaron', 1, 'aalexanderp6@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});
//employee email
test('gets employee email', () => {
const employee = new Employee('Aaron', '1', 'aalexanderp6@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
//new employee role
test('gets role of employee', () => {
const employee = new Employee('Aaron', '1', 'aalexanderp6@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 
