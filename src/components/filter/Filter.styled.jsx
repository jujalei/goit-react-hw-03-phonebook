import styled from '@emotion/styled';

const FilterWrap = styled.form`
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;

  margin-bottom: 30px;
`;

const FilterInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 20px;
  background-color: #fcf3fb;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px dashed;
  padding-left: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
`;

const FilterClearBtn = styled.button`
  cursor: pointer;
  font-size: 16px;

  border: none;
  border-radius: 20px;
  background-color: #f8cef6;
  height: 30px;
  width: 35px;
  transition: border 250ms linear;

  &:hover {
    border: 1px dashed;
  }
`;

export { FilterWrap, FilterInput, InputWrapper, FilterClearBtn };
