import { useFetchContactsQuery } from '../redux/api-service';
import ContactForm from '../contactForm';
import ContactList from '../contactList';
import FilterContact from '../filter/filter';

import { Container, MainTitle, Title } from './App.styled';

function App() {
  const fetchContacts = useFetchContactsQuery();

  return (
    <Container>
      <MainTitle>Phone Book</MainTitle>
      <ContactForm contacts={fetchContacts} />
      <Title>Contacts</Title>
      <FilterContact title="Find contact by name" />
      <ContactList contacts={fetchContacts} />
    </Container>
  );
}

export { App };
