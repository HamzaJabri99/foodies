import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
const Searched = () => {
  const [searchedItem, setSearchedItem] = useState([]);
  let type = useParams();
  const getSearchedItem = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`
    );
    const data = await api.json();
    setSearchedItem(data.results);
  };
  useEffect(() => {
    getSearchedItem(type.plat);
  }, [type.plat]);
  return (
    <Grid>
      {searchedItem.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipeDetails/${item.id}`}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Searched;
