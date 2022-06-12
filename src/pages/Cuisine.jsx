import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let type = useParams();
  const apikey = "6d1cb314db1f45c19fb16ff8dce1b1ae";
  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };
  useEffect(() => {
    getCuisine(type.type);
  }, [type.type]);
  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipeDetails/${type.id}`}>
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
const Card = styled(motion.div)`
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
export default Cuisine;
