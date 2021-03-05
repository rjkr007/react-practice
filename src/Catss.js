import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cats.css";

const Catss = () => {
  const [boxes, setBoxes] = useState([]);
  const [hats, setHats] = useState([]);
  const [clothes, setClothes] = useState([]);

  const fetchData = () => {
    const boxes = "https://api.thecatapi.com/v1/images/search?category_ids=5";
    const hats =
      "https://api.thecatapi.com/v1/images/search?limit=6&category_ids=1";
    const clothes =
      "https://api.thecatapi.com/v1/images/search?limit=6&category_ids=15";

    const Boxes = axios.get(boxes);
    const Hats = axios.get(hats);
    const Clothes = axios.get(clothes);
    axios.all([Boxes, Hats, Clothes]).then(
      axios.spread((...allData) => {
        const allBoxes = allData[0].config.url;
         const allHats = allData[1].config.url;
        const allClothes = allData[2].config.url;

        setBoxes(allBoxes);
        setHats(allHats);
        setClothes(allClothes);




      })
    );
  };




  useEffect(() => {
    fetchData();
  }, []);

  let number;

  const id = [1, 5, 15];
  const handleClick = () => {
    document.body.addEventListener("click", (event) => {
      if (event.target.className === "hats") {
        // console.log("Clicked", event.target.textContent);
        number = id[0];
        console.log(number);
       fetchData.boxes = "https://api.thecatapi.com/v1/images/search?category_ids=1";
      } else if (event.target.className === "boxes") {
        // console.log("Clicked", event.target.textContent);
        number = id[1];
        console.log(number);
      } else if (event.target.className === "clothes") {
        // console.log("Clicked", event.target.textContent);
        number = id[2];
        console.log(number);
      }
    });
  };

  return (
    <div className="catsDisplay">
      <header className="Cat">
        <h1 className="cats">3. Welcome to CATS WEB!</h1>
        <div className="box">
          <button type="button" className="boxes" onClick={handleClick}>
            Boxes
          </button>
          <button type="button" className="hats" onClick={handleClick}>
            Hats
          </button>

          <button type="button" className="clothes" onClick={handleClick}>
            Clothes
          </button>
        </div>
        <div>
          <img className="post"  src={boxes} alt="Cat" />
          <img className="post"  src={hats} alt="Cat" />
          <img className="post"  src={clothes} alt="Cat" />
        </div>
      </header>
    </div>
  );
};

export default Catss;
