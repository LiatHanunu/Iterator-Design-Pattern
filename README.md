# Iterator Design-Pattern EX

###### This EX is a Typescript EX that practices Iterator-design-pattern.

*There are a lot of data structures/collections available in every language and Each collection must provide an iterator that lets it iterate through its objects,  However while doing so it should make sure that it does not expose its implementation.
<br />
<br />which is where Iterator Pattern comes in handy.
<br />Iterator is a behavioral design pattern that allows you to traverse collection elements **without** revealing their underlying representation (list, stack, tree, etc.).*

In this Ex I implement the use of iterator design-pattern, using TypeScript.

**Ex instructions**
<br />
- [x] Create Contact.ts which is a container for phonebook contacts (id, name, address, phones)
 
- [x]  Create IPhonebook.ts for managing phonebook of contacts.
   <li>size:number - gets the amount of contacts
  <li>add(contact:Contact):number - add contact and returns its new id
   <li>addPhone(id:number, phone:string):void - add new phone to existing contact
   <li>get(id:number):Contact|undefined - get contact by id
   <li>get(name:string):Contact[]|undefined - get contacts by name
  <li>remove(id:number):Contact|undefined - remove contact by id and returns it
 - [x] Create Phonebook.ts implementing IPhonebook interface.
But don't export Phonebook. Instead, export a function that returns an instance implementing IPhonebook:
 createPhonebook():IPhonebook

- [x] in main.ts:
  <li>import the function and get an instance of phonebook.
  (Notice, you'll be using the phonebook but only via the IPhonebook interface!)
  <li>Add manually 11 contacts, few with same name (e.g. {'Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']} )
  *Keep the data as realistic as possible

- [x] add 2 new contacts: 1 with existing name, 1 with new name
check the size is updated

- [x] add phone to existing contact

- [x] get contacts by name and add to them the same phone (Notice that adding a phone is done ONLY via addPhone!)

- [x] remove the last contact (of the previous contacts from #8) by id
check the size is updated

 - [x] Enable this:
   <li>for(const contact of Phonebook){
      <li>//contacts will be delivered in alphabetical order 
   <li>}
   <li>for(const contact of Phonebook.nameContains('someString')){
      <li> //contacts with 'cohen' will be delivered
    <li>}





