import { Filter } from '../filter/Filter';

import {
  SubTitle,
  ContactsList,
  ListItem,
  DeleteBtn,
} from './ContactList.styled';

export const ContactList = ({
  contacts,
  onDelete,
  searchName,
  onSearch,
  clearFilter,
}) => {
  return (
    <div>
      {contacts.length > 0 && (
        <div>
          <SubTitle>Contacts</SubTitle>
          <Filter
            searchName={searchName}
            onSearch={onSearch}
            clearFilter={clearFilter}
          />
          <ContactsList>
            {contacts.map(contact => {
              return (
                <ListItem key={contact.id}>
                  <span>
                    {contact.name}: {contact.number}
                  </span>
                  <DeleteBtn
                    type="button"
                    onClick={() => {
                      onDelete(contact.id);
                    }}
                  ></DeleteBtn>
                </ListItem>
              );
            })}
          </ContactsList>
        </div>
      )}
    </div>
  );
};
