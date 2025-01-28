export class Monitor {
    constructor(){}

        id: string = "";
        companyName: string = "";
        size: number = 0;
        nickname: string="";
        comment: string="";
        type: string="";
        bought: boolean = false;
    
    // getData(){
    //     return `${this.companyName} ${this.size} ${this.nickname} ${this.comment} ${this.type} ${this.bought}`;
    // }
        

    deseralize(input: any): Monitor{
        Object.assign(this, input);
        return this;
    }
}