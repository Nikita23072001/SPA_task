export class Monitor {
    constructor(){}

        id: number = Math.floor(Math.random() * 999);
        companyName: string = "";
        size: number = 0;
        nickname: string="";
        comment: string="";
        type: string="";
        bought: boolean = false;
    
    getData(){
        return `${this.companyName} ${this.size} ${this.nickname} ${this.comment} ${this.type} ${this.bought}`;
    }
        

    deseralize(input: any): Monitor{
        Object.assign(this, input);
        return this;
    }
}