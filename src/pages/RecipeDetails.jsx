import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
const RecipeDetails = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const apikey = "14d23ac761c54809a4124af39b026db0";
  let params = useParams();
  const fetchDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apikey}`
    );
    const data = await api.json();
    console.log(data);
    setDetails(data);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div>
      {details.message ? (
        <p>{"sorry we reached our daily limit of requests"}</p>
      ) : (
        <DetailWrapper
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
          </div>
          <Info>
            <Button
              className={activeTab === "instructions" ? "active" : ""}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </Button>
            <Button
              className={activeTab === "ingredients" ? "active" : ""}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </Button>
            {activeTab === "instructions" && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <h1>Instructions</h1>
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h3>
              </motion.div>
            )}
            {activeTab === "ingredients" && (
              <motion.ul
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {details.extendedIngredients.map((item) => (
                  <li key={item.id}>
                    {item.aisle} <img src={item.image} alt="" />
                  </li>
                ))}
              </motion.ul>
            )}
          </Info>
        </DetailWrapper>
      )}
    </div>
  );
};
const DetailWrapper = styled(motion.div)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #000000, #313131);
    color: white;
  }
  h1:after {
    content: "";
    display: block;
    border-bottom: 1px black solid;
    width: 50%;
    background: red;
  }
  h3 {
    font-size: 1.5rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    width: 400px;
    border-radius: 1.5rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  height: 300px;
  margin-left: 4rem;
`;
export default RecipeDetails;
