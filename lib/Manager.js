const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;


/* const frank = new Manager('Frank', 1, 'frank@frank.com', 37 )
const frank = {
    name: 'Frank',
    id: 1,
    email: 'frank@frank.com',
    officeNumber: 37
}

const alaina = new Manager('Alaina', 2, 'al@al.com', 20)

const alaina = { 
    name: 'Alaina',
    id: 2,
    email: 'al@al.com',
    officeNumber: 20
}


alaina.getOfficeNumber()
//20

frank.getRole()
//'Manager' */