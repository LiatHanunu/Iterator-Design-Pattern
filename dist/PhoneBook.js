"use strict";
// Create Phonebook.ts implementing IPhonebook interface.
// But don't export Phonebook. Instead, export a function that returns an instance implementing IPhonebook:
//  createPhonebook():IPhonebook
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Create Phonebook.ts implementing IPhonebook interface.
// But don't export Phonebook. Instead, export a function that returns an instance implementing IPhonebook:
//  createPhonebook():IPhonebook
const Contact_1 = require("./Contact");
const Iterator_1 = __importDefault(require("./Iterator"));
class Phonebook {
    constructor() {
        this.nextAvailableID = 0;
        this.book = [new Contact_1.Contact('', '', [''])];
    }
    get size() { return this.book.length; } //gets the amount of contacts
    get(prop) {
        if (typeof prop === "number") { // get contact by id
            for (const contact of this.book) {
                if (contact.id == prop) {
                    return new Proxy(contact, {});
                }
            }
        }
        else if (typeof prop === "string") { // get contacts by name
            const wantedContacts = [];
            for (const contact of this.book) {
                if (contact.name == prop) {
                    wantedContacts.push(new Proxy(contact, {}));
                }
            }
            if (wantedContacts.length > 0) {
                return wantedContacts;
            }
        }
    }
    add(contact) {
        const id = this.nextAvailableID;
        this.nextAvailableID++;
        contact.id = id;
        this.book.push(contact);
        return id;
    } //add contact and returns its new id
    addPhone(id, phone) {
        for (const contact of this.book) {
            if (contact.id == id) {
                contact.phones.push(phone);
                break;
            }
        }
    } //add new phone to existing contact
    remove(id) {
        const contactToRemove = this.get(id);
        this.book = this.book.filter(obj => obj !== contactToRemove);
        return contactToRemove;
    } // remove contact by id and returns it
    // nameContains(str:string){
    //     return new Iterator(this.book.filter((contact) => contact.name.includes(str)))
    // }
    nameContains(str) {
        const filtered = this.book.filter((contact) => contact.name.includes(str));
        return new Iterator_1.default(filtered);
    }
    [Symbol.iterator]() {
        return new Iterator_1.default(this.book);
    }
}
exports.default = new Phonebook();
