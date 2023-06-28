import styled from '@emotion/styled';
import trashIcon from './icons/trash.svg';
import phoneIcon from './icons/phone.svg';

const SubTitle = styled.h2`
  font-family: 'Dancing Script', cursive;
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
`;

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;

  margin-bottom: 30px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${phoneIcon});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const DeleteBtn = styled.button`
  padding: 1px 5px;
  border: none;
  border-radius: 20px;
  background-color: #f8cef6;
  background-image: url(${trashIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 30px;
  width: 30px;
  transition: border 250ms linear;

  &:hover {
    border: 1px dashed;
  }
`;

export { SubTitle, ContactsList, ListItem, DeleteBtn };
