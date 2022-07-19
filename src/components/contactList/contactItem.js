import proptypes from 'proptypes';
import s from './contactList.module.css';
import { useDeleteContactMutation } from 'components/redux/api-service';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, phone } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li className={s.list__item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{phone}</p>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={e => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.prototype = {
  contact: proptypes.shape({
    id: proptypes.string.isRequired,
    name: proptypes.string.isRequired,
    phone: proptypes.string.isRequired,
  }),
  onDelete: proptypes.func.isRequired,
};

export { ContactItem };
