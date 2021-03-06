import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cats.css";

function Cats() {
  const [posts, setPost] = useState([]);
  const [id, setId] = useState('');

  const handleClick = (event) => {
    if (event.target.className === "hats") {
      setId(1);
      // console.log(id);
    } else if (event.target.className === "boxes") {
      setId(5);
      // console.log(id);
    } else if (event.target.className === "clothes") {
      // console.log("Clicked", event.target.textContent);

      setId(15);
      // console.log(id);
    } else if (event.target.className === "sinks") {
      // console.log("Clicked", event.target.textContent);
      setId(14);
      // console.log(id);
    } else if (event.target.className === "space") {
      // console.log("Clicked", event.target.textContent);
      setId(2);
      // console.log(id);
    } 
  };

  useEffect(() => {
    axios
      //   .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=5&category_ids=${id}`
      )
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="catsDisplay">
      <header className="Cat">
        <div className="cats">
          <h1>😽😼🙀😿😾 3.Welcome to CATS WEB! 😹😻😺😸🐱</h1>
        </div>
        <h2 className="cats">
          ✨✨✨✨✨ How beautiful 🎇 , Enjoy more images , 🎇 just a click away on
          links below- ✨✨✨✨✨
        </h2>

        <div className="box">
          <button type="button" className="boxes" onClick={handleClick}>
            Boxes
          </button>
          <button type="button" className="hats" onClick={handleClick}>
            Hats
          </button>
          <button type="button" className="space" onClick={handleClick}>
            Space
          </button>

          <button type="button" className="sinks" onClick={handleClick}>
            Sinks
          </button>
          <button type="button" className="clothes" onClick={handleClick}>
            Clothes
          </button>
        </div>
        <ul className="list">
          {posts.map((post) => (
            <li key={post.id}>
              {/* {post.title} */}
              <img className="post" src={post.url} alt="Cat" />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Cats;
