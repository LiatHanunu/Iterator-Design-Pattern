// Create Phonebook.ts implementing IPhonebook interface.
// But don't export Phonebook. Instead, export a function that returns an instance implementing IPhonebook:
//  createPhonebook():IPhonebook

// Create Phonebook.ts implementing IPhonebook interface.
// But don't export Phonebook. Instead, export a function that returns an instance implementing IPhonebook:
//  createPhonebook():IPhonebook
import { Contact } from "./Contact"
import { IPhonebook } from "./IPhoneBook"
import Iterator from "./Iterator"


class Phonebook implements IPhonebook {
    private nextAvailableID = 0
    public book: Contact[]
    constructor() {
        this.book = [new Contact('', '', [''])]
    }


    get size() { return this.book.length }//gets the amount of contacts

    get(id: number): Contact | undefined;
    get(name: string): Contact[] | undefined;
    get(prop: unknown): Contact[] | undefined | Contact {
        if (typeof prop === "number") { // get contact by id
            for (const contact of this.book) {
                if (contact.id == prop) {
                    return new Proxy(contact, {})
                }
            }
        } else if (typeof prop === "string") { // get contacts by name
            const wantedContacts = []
            for (const contact of this.book) {
                if (contact.name == prop) {
                    wantedContacts.push(new Proxy(contact, {}))
                }
            }
            if (wantedContacts.length > 0) {
                return wantedContacts
            }
        }
    }


    add(contact: Contact) {
        const id = this.nextAvailableID
        this.nextAvailableID++
        contact.id = id
        this.book.push(contact)
        return id
    } //add contact and returns its new id

    addPhone(id: number, phone: string) {
        for (const contact of this.book) {
            if (contact.id == id) {
                contact.phones.push(phone)
                break
            }
        }
    } //add new phone to existing contact

    remove(id: number) {
        const contactToRemove = this.get(id)
        this.book = this.book.filter(obj => obj !== contactToRemove)
        return contactToRemove
    } // remove contact by id and returns it

    // nameContains(str:string){
    //     return new Iterator(this.book.filter((contact) => contact.name.includes(str)))

    // }

    nameContains(str: string): Iterable<Contact> {
        const filtered = this.book.filter((contact) => contact.name.includes(str))
        return new Iterator(filtered)
    }

    [Symbol.iterator]() {
        return new Iterator(this.book);
    }
}

export default new Phonebook()

