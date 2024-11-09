import Contact from "../Contact/Contact";

const ContactList = ({
  contacts,
  updateContacts,
  filteredContacts,
  searchValue,
  deleteContact,
}) => {
  return (
    <ul>
      {searchValue === ""
        ? contacts.map((contact) => (
            <li key={contact.id}>
              <Contact
                contact={contact}
                updateContacts={updateContacts}
                deleteContact={deleteContact}
              />
            </li>
          ))
        : filteredContacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
    </ul>
  );
};

export default ContactList;
