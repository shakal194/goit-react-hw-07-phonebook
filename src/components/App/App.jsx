import ContactForm from '../contactForm';
import ContactList from '../contactList';
import FilterContact from '../filter/filter';

import { Container, MainTitle, Title } from './App.styled';

function App() {
  return (
    <Container>
      <MainTitle>Phone Book</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <FilterContact title="Find contact by name" />
      <ContactList />
    </Container>
  );
}

export { App };
