import React, {useState} from "react";
import {ContactsCollection} from "../api/ContactsCollection.js";

export const ContactForm = () => {

  const [name, setName] = useState(initialState="");
  const [email, setEmail] = useState(initialState="");
  const [imageURL, setImageURL] = useState(initialState="");

  const saveContext = () => {
    console.log({name, email, imageURL});
    ContactsCollection.insert({name, email, imageURL});
  };

  return (
<form>
<div>
  <label htmlFor="name">
    Name
  </label>
  <input 
    type="text" 
    id="name"
    onChange={(e) => setName(e.target.value)}
  />
</div>
<div>
  <label htmlFor="email">Email</label>
  <input 
    type="email" 
    id="email"
    onChange={(e) => setEmail(e.target.value)}
  />
</div>
<div>
  <label htmlFor="imageURL">Image URL</label>
  <input 
    type="text" 
    id="imageURL"
    onChange={(e) => setImageURL(e.target.value)}
  />
</div>
<div>
  <button type="button" onClick={saveContext}>Save Content</button>
</div>
</form>
)};
