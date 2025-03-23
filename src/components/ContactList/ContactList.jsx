import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
const ContactList = ({contacts, onDelete}) => {
    return (
    <ul className={style.contactList}>
        {contacts.map((contact) => (
            <li key={contact.id} className={style.contactItem}>
                <Contact {...contact} onDelete={onDelete} />
            </li>
        ))}
    </ul>
    );
};
export default ContactList;