import { Component } from 'react';
import {
  FilterWrap,
  FilterInput,
  InputWrapper,
  FilterClearBtn,
} from './Filter.styled';

export class Filter extends Component {
  render() {
    const { searchName, onSearch, clearFilter } = this.props;

    return (
      <FilterWrap>
        <InputWrapper>
          <label>
            Find contacts by name
            <FilterInput
              name="text"
              type="text"
              value={searchName}
              onChange={onSearch}
            />
          </label>
          <FilterClearBtn type="button" onClick={clearFilter}>
            &times;
          </FilterClearBtn>
        </InputWrapper>
      </FilterWrap>
    );
  }
}
