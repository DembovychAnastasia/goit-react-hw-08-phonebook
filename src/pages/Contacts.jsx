import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Dna } from 'react-loader-spinner';

import { fetchContacts } from '../redux/contacts/operations';
import { ContactList} from 'components/ContactList/ContacttList';
import { Filter } from 'components/FilterContact/FilterContact';
import ContactForm from 'components/FormContact/FormContact';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { ContForm } from 'components/ContactList/ContactList.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContForm>
      <h1>Your phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <ContactList />
    </ContForm>
  );
};

export default Contacts;