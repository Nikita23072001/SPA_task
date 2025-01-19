"use strict";
// function customer(){
//     this.name = "";
//     this.nip = "";
//     this.city = "";
//     this.street = "";
//     this.houseNumber = "";
//     this.zipCode = "";
// }
class Customer {
    constructor() {
        this.id = "";
        this.name = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.postalCode = "";
    }
    getData() {
        return `${this.name} (${this.nip})`;
    }
    getAdress() {
        return `Miasto: ${this.city}, Ulica: ${this.street}, Numer Budynku: ${this.houseNumber}`;
    }
}
class supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.accountNumber = accountNumber;
    }
}
