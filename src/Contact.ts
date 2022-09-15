//Create Contact.ts which is a container for phonebook contacts (id, name, address, phones)
//{'Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']}
export class Contact{
    
    constructor(public name:string,public address:string,public phones:[string], public id:number = -1){}

}

