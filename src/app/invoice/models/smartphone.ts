export class Smartphone {
    constructor(){}

        id: string = "";
        companyName: string = "";
        ram: string = "";
        cpu: string="";
        nickname: string="";
        comment: string="";
        type: string="";
        bought: boolean = false;
    
    // getData(){
    //     return `${this.companyName} ${this.ram} ${this.cpu} ${this.nickname} ${this.comment} ${this.type} ${this.bought}`;
    // }
        

    deseralize(input: any): Smartphone{
        Object.assign(this, input);
        return this;
    }
}