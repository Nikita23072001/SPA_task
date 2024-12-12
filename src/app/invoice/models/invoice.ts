

export class Invoice {

    name: string = "";
    quantity: number=0;
    unit?: Unit;
    netto?: number = 0;
    tax?: Tax;
    brutto?: number;
}
