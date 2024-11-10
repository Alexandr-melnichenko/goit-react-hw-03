import style from "./Contact.module.css";
import { ImPhone } from "react-icons/im";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={style.contactContainer}>
      <div className={style.params}>
        <p className={style.pContact}>
          <RiContactsFill className={style.iconMan} />
          {contact.name}
        </p>
        <p className={style.pContact}>
          <ImPhone className={style.iconPhone} />
          {contact.number}
        </p>
      </div>
      <button
        className={style.deleteButton}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
