//Employee constructor 
const Employee = require("./Employee");
//extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
//employee constructor 
super (name, id, email);
this.github = github; 
}
// returning github from input 
getGithub () {
    return this.github;
}
//override employee role
getRole () {
    return "Engineer";
}
}
// to be exported 
module.exports = Engineer; 