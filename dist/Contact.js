"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
//Create Contact.ts which is a container for phonebook contacts (id, name, address, phones)
//{'Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']}
class Contact {
    constructor(name, address, phones, id = -1) {
        this.name = name;
        this.address = address;
        this.phones = phones;
        this.id = id;
    }
}
exports.Contact = Contact;
