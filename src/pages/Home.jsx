import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, esse. Cupiditate quibusdam porro, quisquam excepturi odit placeat vel aspernatur sit.",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, esse. Cupiditate quibusdam porro, quisquam excepturi odit placeat vel aspernatur sit.",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, esse. Cupiditate quibusdam porro, quisquam excepturi odit placeat vel aspernatur sit.",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, esse. Cupiditate quibusdam porro, quisquam excepturi odit placeat vel aspernatur sit.",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
