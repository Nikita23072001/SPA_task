export class Customer {
    constructor(){}

        id: string = "";
        name: string = "";
        nip: string = "";
        city: string="";
        street: string="";
        houseNumber: string="";
        postalCode: string="";
        isActive: boolean = true;
    
    getData(){
        return `${this.name} (${this.nip})`;
    }
    
    getAdress(){
        return `Miasto: ${this.city}, Ulica: ${this.street}, Numer Budynku: ${this.houseNumber}`
    }

    deseralize(input: any): Customer{
        Object.assign(this, input);
        return this;
    }
}
