import React from 'react';
import {ContactForm} from "./ContactForm.jsx";
import {ContactList} from "./ContactList.jsx";

export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactForm />
    <ContactList />
  </div>
);
