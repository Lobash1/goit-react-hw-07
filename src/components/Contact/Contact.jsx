import css from "./Contact.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ user }) {
  const dispatch = useDispatch();

  if (!user) {
    return null; // Якщо user не передано, просто не рендеримо компонент
  }

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <div className={css.contact}>
        <div className={css.info}>
          <BsFillPeopleFill />
          <p>{user.name}</p>
        </div>
        <div className={css.info}>
          <FaPhoneVolume />
          <p>{user.number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={() => handleDelete(user.id)}>
        Delete
      </button>
    </li>
  );
}
