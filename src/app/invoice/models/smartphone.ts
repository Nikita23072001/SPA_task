export class Smartphone {
    constructor(){
    }

        id: number = Math.floor(Math.random()*999);
        companyName: string = "";
        cpu: string = "";
        ram: string = "";
        ssd: string= "";
        camera: string="";
        nickname: string="";
        comment: string="";
        type: string="";
        bought: boolean = false;
    
    getData(){
        return `${this.companyName} ${this.ram} ${this.ssd} ${this.nickname} ${this.comment} ${this.type} ${this.bought}`;
    }
        

    deseralize(input: any): Smartphone{
        Object.assign(this, input);
        return this;
    }
}