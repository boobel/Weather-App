import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/LocationContext";

const Header: React.FC = () => {
  const { setSearchValue } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    console.log(value);
  };

  const delayedHandleSearch = debounce(handleSearch, 2000);

  const handleChange = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchTerm(value);
    delayedHandleSearch(value);
  };

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <Wrapper>
      <StyledInput
        type="text"
        placeholder="Search for cities"
        value={searchTerm}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.header`
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

function debounce(func: (value: string) => void, delay: number) {
  let timerId: ReturnType<typeof setTimeout>;
  return function (value: string) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(value);
    }, delay);
  };
}

export { Header };
