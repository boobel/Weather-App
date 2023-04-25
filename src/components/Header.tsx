import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/LocationContext";

const Header: React.FC = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <Wrapper>
      <StyledInput
        type="text"
        placeholder="Search for cities"
        value={searchValue}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50vw;
  height: 2vh;
  border-radius: 1rem;
`;

const StyledInput = styled.input`
  color: white;
  border: solid 1px #2c2b2b;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: var(--primary-color);
  width: 100%;
  height: 2vh;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export { Header };
