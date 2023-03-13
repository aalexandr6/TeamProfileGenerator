//Manager constructor 
const Manager = require('../lib/Manager');
// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Aaron', 1, 'aalexanderp6@gmail.com', 4);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
// Employee role
test('gets role of employee', () => {
    const manager = new Manager('Aaron', 1, 'aalexanderp6@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 