"use strict"
class contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
    toString() {
        return "Name:" +this.name + "<br> Email:" + this.email + "<br> Phone:" + this.phone + "<br> Relation:" + this.relation + "<br> "; //formats the return to have spaces between the variables
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(newContact){
        this.contacts.push(newContact);
    }
    deleteAt(ind) { // Deletes contact based on position (ind)
        this.contacts.splice(ind,1);
    }
    deleteName(inputName){
        let x;
        this.contacts.forEach(function(person,ind){
            if (person.name == inputName){
                x = ind;
            }
        });
        this.contacts.splice(x,1);
    }
}

let Book = new AddressBook();
var count=0;

function addContacts(){
    var thisContact = new contact(document.getElementById("name").value,document.getElementById("email").value,document.getElementById("phone").value,document.getElementById("relation").value);
    Book.add(thisContact);
    // create a p element for inserting in el
    var el = document.querySelector('#contacts');

    // get element content as string
    console.log(el.innerHTML);
    count = count +1;
    // append to the element's content
    el.innerHTML +='<p id="'+count+'">' + thisContact.toString() + '<button type="button" onclick="removeElement('+count+')">Delete</button> <input type="hidden" class ="hidden" id="h'+count+'" value="'+thisContact.name+'"></p>';

}

function removeElement(deleteSpot) {
    // Removes an element from the document
    var x ="h"+deleteSpot;
    var deleteName = document.getElementById(x).value;
    Book.deleteName(deleteName);
    var el = document.getElementById(deleteSpot);
    el.parentNode.removeChild(el);
}