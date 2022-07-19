import { Circles } from 'react-loader-spinner';

import { useSelector } from 'react-redux';
import { ContactItem } from './contactItem';
import s from './contactList.module.css';

const ContactList = ({ contacts: { data: contacts, isFetching, isError } }) => {
  const filterValue = useSelector(state => state.filter);

  return (
    <>
      {isFetching && (
        <div className={s.watch}>
          <Circles
            color="#00BFFF"
            height={200}
            width={200}
            ariaLabel="loading"
          />
        </div>
      )}
      {!isFetching && !isError && contacts && (
        <ul className={s.list}>
          {contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filterValue.toLowerCase())
            )
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, phone }) => {
              return <ContactItem contact={{ id, name, phone }} key={id} />;
            })}
        </ul>
      )}
      {isError && <h1>Data are not found</h1>}
    </>
  );
};

export default ContactList;
