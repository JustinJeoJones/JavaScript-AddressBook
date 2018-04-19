"use strict"
class contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
    toString() {
        return this.name + " " + this.email + " " + this.phone + " " + this.relation; //formats the return to have spaces between the variables
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(name, email, phone, relation) { //Adds new contact to the book
        var newContact = new contact(name, email, phone, relation);
        this.contacts.push(newContact);
        Book.print(newContact);
    }
    deleteAt(ind) { // Deletes contact based on position (ind)
        this.contacts.splice(ind,1);
    }
    print(ind) {// prints out each of the contacts in order of index
        
           
            
            
        
    }
}

let Book = new AddressBook();
var count=0;

function addContacts(){
    var thisContact = new contact(document.getElementById("name").value,document.getElementById("email").value,document.getElementById("phone").value,document.getElementById("relation").value);
    // create a p element for inserting in el
    var el = document.querySelector('#contacts');

    // get element content as string
    console.log(el.innerHTML);
    count = count +1;
    // append to the element's content
    el.innerHTML +='<p id="'+count+'">' + thisContact.toString() + '<button type="button" onclick="removeElement('+count+')">Delete</button></p>';

}

function removeElement(deleteSpot) {
    // Removes an element from the document
    var el = document.getElementById(deleteSpot);
    el.parentNode.removeChild(el);
}