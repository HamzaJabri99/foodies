import { useEffect, useState } from "react";

const Popular = () => {
  const apikey = "14d23ac761c54809a4124af39b026db0";
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((item) => {
        return (
          <li style={{ listStyle: "square" }} key={item.id}>
            {item.title}
            <img src={item.image} alt="" />
          </li>
        );
      })}
    </div>
  );
};
export default Popular;
