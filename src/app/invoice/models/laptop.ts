export class Laptop {
    constructor(){
        this.id = ''; //random function
    }

        id: string = "";
        companyName: string = "";
        ram: string = "";
        cpu: string="";
        gpu: string="";
        ssd: string="";
        nickname: string="";
        comment: string="";
        type: string="";
        bought: boolean = false;
    
    getData(){
        return `${this.companyName} ${this.ram} ${this.ram} ${this.cpu} ${this.gpu} ${this.ssd} ${this.nickname} ${this.comment} ${this.type} ${this.bought}`;
    }
        

    deseralize(input: any): Laptop{
        Object.assign(this, input);
        return this;
    }
}

//3 formularze
//3 structury danych
//
