"use strict";
// in main.ts:
// import the function and get an instance of phonebook.
// (Notice, you'll be using the phonebook but only via the IPhonebook interface!)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Phonebook_1 = __importDefault(require("./Phonebook"));
const Contact_1 = require("./Contact");
const contacts = [new Contact_1.Contact('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']),
    new Contact_1.Contact('Liat', 'Jabutinsky 14, Kiryat-Ono', ['050-4543300']),
    new Contact_1.Contact('Ana', 'Ben-Gurion 18, Petah-Tikva', ['052-5381648']),
    new Contact_1.Contact('Shahar', 'Herzel, Tel Aviv', ['050-4878456']),
    new Contact_1.Contact('Amit', 'Ben-Gurion 18, Netanya', ['050-4878456']),
    new Contact_1.Contact('Omer', 'Hamagshimim 21, Netanya', ['051-4878456']),
    new Contact_1.Contact('Rotem', 'Pinkas 25, Kiryat Ono', ['052-4878456']),
    new Contact_1.Contact('Rotem', 'Ben-Gurion 17, Netanya', ['053-4878456']),
    new Contact_1.Contact('Liat', 'Ben-Gurion 14, Netanya', ['054-4878456']),
    new Contact_1.Contact('Mirit', 'Ben-Gurion 30, Netanya', ['055-4878456']),
    new Contact_1.Contact('Pnina', 'Ben-Gurion 30, Netanya', ['056-4878456'])];
function addContacts(contacts) {
    // Add manually 11 contacts, few with same name (e.g. {'Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']} )
    // *Keep the data as realistic as possible
    for (const contact of contacts) {
        Phonebook_1.default.add(contact);
    }
}
addContacts(contacts);
// add 2 new contacts: 1 with existing name, 1 with new name
// check the size is updated
const newContacts = [new Contact_1.Contact('Vered', 'Ben-Gurion 30, Netanya', ['055-4878454']),
    new Contact_1.Contact('Pnina', 'Ben-Gurion 30, Netanya', ['056-4878453'])];
addContacts(newContacts);
console.log(Phonebook_1.default.size); //13
// add phone to existing contact
Phonebook_1.default.addPhone(3, '09-434338');
console.log(Phonebook_1.default.get(3));
const contactName = 'Rotem';
// get contacts by name and add to them the same phone (Notice that adding a phone is done ONLY via addPhone!)
const contactsFound = Phonebook_1.default.get(contactName);
if (contactsFound) {
    for (const contact of contactsFound) {
        contact.phones.push('555');
    }
}
// remove the last contact (of the previous contacts from #8) by id
// check the size is updated
const contactsFound2 = Phonebook_1.default.get(contactName);
if (contactsFound2) {
    console.log(Phonebook_1.default.remove(contactsFound2[contactsFound2.length - 1].id));
}
console.log(Phonebook_1.default.size); //12
// Enable this:
// for(const contact of Phonebook){
//    //contacts will be delivered in alphabetical order
// 
// }
// for(const contact of Phonebook.nameContains('someString')){
//     //contacts with 'cohen' will be delivered
//  }
function sortAlphabetical() {
    const tempArray = [];
    for (const contact of Phonebook_1.default) {
        tempArray.push(contact);
    }
    // this loop is just to show the implementation of Iterator design pattern, It can be done in many other ways.
    // for example: const tempArray = [...Phonebook]
    return tempArray.sort((a, b) => {
        const nameA = a === null || a === void 0 ? void 0 : a.name.toUpperCase();
        const nameB = b === null || b === void 0 ? void 0 : b.name.toUpperCase();
        if (nameA && nameB) {
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }
        return 0;
    });
}
console.log(sortAlphabetical());
//contacts will be delivered in alphabetical order
function nameContains(str) {
    for (const contact of Phonebook_1.default.nameContains(str)) {
        console.log(contact);
        //contacts that contain given str will be delivered
    }
}
nameContains('S');
