import styled from '@emotion/styled';

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: #fff;
  border-radius: 15px;
  padding: 20px;

  margin-bottom: 30px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 20px;
  background-color: #fcf3fb;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px dashed;
  padding-left: 10px;
`;

const FormBtn = styled.button`
  cursor: pointer;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: #f8cef6;
  height: 30px;
  transition: border 250ms linear;

  &:hover {
    border: 1px dashed;
  }
`;

export { FormWrap, FormInput, FormBtn };
