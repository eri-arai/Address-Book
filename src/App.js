import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  });
  const [contacts, setContacts] = useState([]);

  const addContact = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phone } = contact;
    const formValid =
      firstname && lastname &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) &&
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$/.test(
        phone
      );
    if (!formValid) {
      return;
    }
    setContacts((contacts) => [
      ...contacts,
      { id: uuidv4(), firstname, lastname, email, phone }
    ]);
  };

  const deleteContact = (index) => {
    setContacts((contacts) => contacts.filter((_, i) => i !== index));
  };

  return (
    
    <div class="mt-18 bg-book absolute h-screen w-screen bg-[length:1500px_750px] bg-no-repeat">
      <div className="App" class="grid">
        <form class="w-full max-w-lg ml-44 mt-28 row-span-6" onSubmit={addContact}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input value={contact.firstname} onChange={(e) =>
                setContact((contact) => ({ ...contact, firstname: e.target.value }))
              } class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input value={contact.lastname} onChange={(e) =>
                setContact((contact) => ({ ...contact, lastname: e.target.value }))
              } class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Email
              </label>
              <input value={contact.email} onChange={(e) =>
                setContact((contact) => ({ ...contact, email: e.target.value }))
              } class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="abc@email.com" />
              <p class="text-gray-600 text-xs italic">Please enter a valid email address.</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Phone
              </label>
              <input value={contact.phone} onChange={(e) =>
                setContact((contact) => ({ ...contact, phone: e.target.value }))
              } class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="1234567890" />
              <p class="text-gray-600 text-xs italic">Please enter a valid phone number.</p>
            </div>
          </div>
          <button type="submit" class="mt-10 ml-44 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-m leading-tight rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Add Contact</button>
        </form>
        {contacts.map((contact, index) => {
          return (
            <section class="grid col-start-2 col-span-2 mt-20 ml-28 rounded-lg shadow-lg bg-white bg-opacity-40 hover:bg-opacity-80 w-64 h-40">
              <div key={contact.id}>
                <p class="mt-4 ml-5 block tracking-wide text-gray-700 text-ss"><b>NAME</b> : {contact.firstname} {contact.lastname}</p>
                <p class="ml-5 block tracking-wide text-gray-700 text-ss"><b>EMAIL</b> : {contact.email}</p>
                <p class="ml-5 block tracking-wide text-gray-700 text-ss"><b>PHONE</b> : {contact.phone}</p>
                <button type="button" onClick={() => deleteContact(index)} class="mb-5 mt-3 ml-20 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-m leading-tight rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
              </div></section>
          );
        })}
      </div></div>
  );
}

