// in main.ts:
// import the function and get an instance of phonebook.
// (Notice, you'll be using the phonebook but only via the IPhonebook interface!)


import Phonebook from "./Phonebook";
import { Contact } from "./Contact"

const contacts = [new Contact('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']),
new Contact('Liat', 'Jabutinsky 14, Kiryat-Ono', ['050-4543300']),
new Contact('Ana', 'Ben-Gurion 18, Petah-Tikva', ['052-5381648']),
new Contact('Shahar', 'Herzel, Tel Aviv', ['050-4878456']),
new Contact('Amit', 'Ben-Gurion 18, Netanya', ['050-4878456']),
new Contact('Omer', 'Hamagshimim 21, Netanya', ['051-4878456']),
new Contact('Rotem', 'Pinkas 25, Kiryat Ono', ['052-4878456']),
new Contact('Rotem', 'Ben-Gurion 17, Netanya', ['053-4878456']),
new Contact('Liat', 'Ben-Gurion 14, Netanya', ['054-4878456']),
new Contact('Mirit', 'Ben-Gurion 30, Netanya', ['055-4878456']),
new Contact('Pnina', 'Ben-Gurion 30, Netanya', ['056-4878456'])]

function addContacts(contacts: Contact[]) {
    // Add manually 11 contacts, few with same name (e.g. {'Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']} )
    // *Keep the data as realistic as possible
    for (const contact of contacts) {
        Phonebook.add(contact)
    }
}
addContacts(contacts)


// add 2 new contacts: 1 with existing name, 1 with new name
// check the size is updated

const newContacts = [new Contact('Vered', 'Ben-Gurion 30, Netanya', ['055-4878454']),
new Contact('Pnina', 'Ben-Gurion 30, Netanya', ['056-4878453'])]

addContacts(newContacts)

console.log(Phonebook.size) //13

// add phone to existing contact

Phonebook.addPhone(3, '09-434338')
console.log(Phonebook.get(3)) 



const contactName = 'Rotem'

// get contacts by name and add to them the same phone (Notice that adding a phone is done ONLY via addPhone!)

const contactsFound = Phonebook.get(contactName)
if (contactsFound) {
    for (const contact of contactsFound) {
        contact.phones.push('555')
    }
}

// remove the last contact (of the previous contacts from #8) by id
// check the size is updated
const contactsFound2 = Phonebook.get(contactName)
if (contactsFound2) {
    console.log(Phonebook.remove(contactsFound2[contactsFound2.length - 1].id))
}

console.log(Phonebook.size) //12


// Enable this:
// for(const contact of Phonebook){
//    //contacts will be delivered in alphabetical order
// 
// }
// for(const contact of Phonebook.nameContains('someString')){
//     //contacts with 'cohen' will be delivered
//  }


function sortAlphabetical() {
    const tempArray = []
    for (const contact of Phonebook) {
        tempArray.push(contact)
    }
    // this loop is just to show the implementation of Iterator design pattern, It can be done in many other ways.
    // for example: const tempArray = [...Phonebook]
    return tempArray.sort((a, b) => {
        const nameA = a?.name.toUpperCase();
        const nameB = b?.name.toUpperCase();
        if (nameA && nameB) {
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }
        return 0;
    })
}
console.log(sortAlphabetical())
//contacts will be delivered in alphabetical order

function nameContains(str: string) {
    for (const contact of Phonebook.nameContains(str)) {
        console.log(contact)
        //contacts that contain given str will be delivered
    }
}

nameContains('S')