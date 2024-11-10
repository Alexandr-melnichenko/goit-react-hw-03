import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({
  contacts,
  updateContacts,
  filteredContacts,
  searchValue,
  deleteContact,
}) => {
  return (
    <ul className={s.listContact}>
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
            <li key={contact.id}>
              <Contact
                contact={contact}
                updateContacts={updateContacts}
                deleteContact={deleteContact}
              />
            </li>
          ))}
    </ul>
  );
};

export default ContactList;
