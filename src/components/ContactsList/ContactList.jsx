import PropTypes from "prop-types";
import css from './ContactList.module.css'

export const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contactItem} key={id}>
           <span>{name}: {number}</span> 
            <button onClick={() => onDeleteContacts(id)}>Delete</button>
            
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
}