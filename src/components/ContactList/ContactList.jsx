import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items); // Беремо контакти з Redux
  const filter = useSelector((state) => state.filters.name);

  // Фільтрація контактів по імені
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <Contact
          key={contact.id}
          user={contact}
          onDelete={() => dispatch(deleteContact(contact.id))} // Передаємо функцію видалення
        />
      ))}
    </ul>
  );
}
