import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiCroissant } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Categorie = () => {
  return (
    <List>
      <CatLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </CatLink>
      <CatLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </CatLink>
      <CatLink to={"/cuisine/Japanese"}>
        <GiNoodles />
        <h4>Thai</h4>
      </CatLink>
      <CatLink to={"/cuisine/French"}>
        <GiCroissant />
        <h4>French</h4>
      </CatLink>
    </List>
  );
};
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: gap(3);
  margin: 2rem 0rem;
`;
const CatLink = styled(NavLink)`
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  padding: 1.5rem 0rem;
  color: white;
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  h4 {
    color: #fff;
    font-size: 0.8rem;
    align-items: center;
  }
  svg {
    color: #f37878;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(35deg, #f37878, #e94057);
    color: white;
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Categorie;
