const Contact = ({ contact, deleteContact }) => {
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
