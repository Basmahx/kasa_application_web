import Banner from "../components/Banner";
import Cards from "../components/Cards";
import React, { useState, useEffect } from "react";
import Jdata from "../data/logements.json";
import "../styles/index.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Jdata);
  }, []); // va parcourir une seule fois grace à la tableau de dépendances vide

  return (
    <div>
      <Banner />
      <div>
        <div className="cards">
          {data.map((logement) => (
            <div key={logement.id}>
              <Cards key={logement.id} logement={logement} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
