// employee constructor 
class Employee {
constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email 
}
//name from input
    getName () {
    return this.name;
}
// ID from input
getId () {
    return this.id;
}   
//email from input
getEmail () {
    return this.email;
}
// returning employee type 
    getRole () {
    return 'Employee'; 
}
};
// to be exported 
module.exports = Employee; 