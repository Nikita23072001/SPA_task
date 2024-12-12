// function customer(){
//     this.name = "";
//     this.nip = "";
//     this.city = "";
//     this.street = "";
//     this.houseNumber = "";
//     this.zipCode = "";
// }

class Customer{
    id: string="";
    name: string = "";
    nip: string = "";
    city: string="";
    street: string="";
    houseNumber: string="";
    postalCode: string="";

    getData(){
        return `${this.name} (${this.nip})`;
    }

    getAdress(){
        return `Miasto: ${this.city}, Ulica: ${this.street}, Numer Budynku: ${this.houseNumber}`
    }
}

class supplier extends Customer{
        accountNumber: number = 0;
}
