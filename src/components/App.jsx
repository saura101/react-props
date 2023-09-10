import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard (contact) {
  return (
    <Card 
    key={contact.id}
    name={contact.name} 
    img={contact.imgURL} 
    tel={contact.phone} 
    email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://media.licdn.com/dms/image/C4E03AQG6Ca5xjb-T4w/profile-displayphoto-shrink_800_800/0/1628088929172?e=2147483647&v=beta&t=uqgKW0KPZGGgXrj0VemDVqk0f8QAKKTRF9FYROX0xdE"/>
      {contacts.map(createCard)}
      {/* <Card name={contacts[0].name} img={contacts[0].imgURL} tel={contacts[0].phone} email={contacts[0].email}/>
      <Card name={contacts[1].name} img={contacts[1].imgURL} tel={contacts[1].phone} email={contacts[1].email}/>
      <Card name={contacts[2].name} img={contacts[2].imgURL} tel={contacts[2].phone} email={contacts[2].email}/> */}
    </div>   
  );
}

export default App;
