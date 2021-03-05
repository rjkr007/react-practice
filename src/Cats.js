import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cats.css";

function Cats() {
  const [posts, setPost] = useState([]);
  //   const [idFromButtonClick] = useState([]);
  //   const [id, setId] = useState(1)
  // const id = useState(5);
  let number;
  const id = [1, 5, 15];

  // const listItems = id.map((number) => (
  //   <li key={number.toString()}>{number}</li>
  // ));

  // let id = [];
  //   const [idFromButtonClick, setIdFromButtonClick] = useState([])
  // const boxes = document.querySelector(".boxes");
  // const hats = document.querySelector(".hats");
  // const clothes = document.querySelector(".clothes");
  const handleClick = () => {
    document.body.addEventListener("click", (event) => {
      if (event.target.className === "hats") {
        // console.log("Clicked", event.target.textContent);
number = id[0];
console.log(number);
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

  useEffect(() => {
    axios
      //   .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=6&category_ids=1`
      )
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    // <div>
    //   <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    //   <button type="button" onClick={handleClick}>
    //     Fetch Post
    //   </button>
    //   <div>{post.title}</div>
    // </div>

    <div className="catsDisplay">
      <header className="Cat">
        <h1 className="cats">3. Welcome to CATS WEB!</h1>
        <div className="box">
          <button
            type="button"
            className="boxes"
            onClick={handleClick}
          >
            Boxes
          </button>
          <button type="button" className="hats" onClick={handleClick}>
            Hats
          </button>

          <button
            type="button"
            className="clothes"
            onClick={handleClick}
          >
            Clothes
          </button>
        </div>
        {posts.map((post) => (
          <img className="post" src={post.url} alt="Cat" />
        ))}
      </header>
    </div>
  );
}

export default Cats;
