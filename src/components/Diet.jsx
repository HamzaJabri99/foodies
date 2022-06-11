import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Diet = () => {
  const apikey = "6d1cb314db1f45c19fb16ff8dce1b1ae";
  const [diet, setDiet] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const checkStorage = localStorage.getItem("diet");
    if (checkStorage) {
      setDiet(JSON.parse(checkStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("diet", JSON.stringify(data.recipes));
      setDiet(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Our Diet Recipes</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {diet.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <Card>
                  <p>{item.title}</p>
                  <img src={item.image} alt="" />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 2rem;
`;

export default Diet;
