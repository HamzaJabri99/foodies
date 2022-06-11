import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [searchItems, setSearchItems] = useState();
  const navigate = useNavigate();

  return (
    <FormStyle
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/search/" + searchItems);
      }}
    >
      <div>
        <FaSearch />
        <input
          placeholder="Search a food,categorie,recipe etc..."
          value={searchItems}
          onChange={(e) => {
            setSearchItems(e.target.value);
          }}
          type="text"
          name=""
          id=""
        />
      </div>
    </FormStyle>
  );
};
const FormStyle = styled.form`
  width: 100%;
  div {
    margin: 2rem auto;
    position: relative;
    width: 80%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    height: 3rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;
export default Search;
