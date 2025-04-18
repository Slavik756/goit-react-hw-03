import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css"; 

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts)); 
      return updatedContacts;
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter(
        (contact) => contact.id !== id
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts)); 
      return updatedContacts;
    });
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={searchQuery} onChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
