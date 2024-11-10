import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

function App() {
  // Стани для контактів
  const [contacts, setContact] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );
    console.log(savedContacts);

    return savedContacts !== null
      ? savedContacts
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  // Добавляємо контакти в локальне сховище
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Стани для пошуку
  const [searchValue, setSearchValue] = useState("");

  //Фільтрований список контактів
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Функція добавлення нового контакту до списку
  const addContact = (newContact) => {
    setContact((prevContacts) => [...prevContacts, newContact]);
  };

  // Функція видалення контакту
  const deleteContact = (id) => {
    setContact((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList
        contacts={contacts}
        updateContacts={setContact}
        filteredContacts={filteredContacts}
        searchValue={searchValue}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
