import { Label, Input } from './FilterContact.styled';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/filterSlice';



export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        // value={filter}
        // onChange={event => dispatch(setFilter(event.target.value.trim()))}
        onChange={event =>
          dispatch(setFilterContacts(event.target.value.trim()))
        }
      />
    </Label>
  );
};