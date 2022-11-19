import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Naya</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          expedita quibusdam, quo odio laborum quis debitis ullam magni soluta
          amet aut facilis nulla quasi obcaecati, consectetur tempora magnam
          culpa corrupti.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          explicabo deserunt quam natus amet ducimus. Reiciendis eum dicta aut
          debitis!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          eveniet veritatis animi veniam fugiat placeat dignissimos est id
          officia repellat sapiente illum provident optio, minima exercitationem
          at nam mollitia, unde commodi sequi vel cupiditate! Ullam sint minus
          quis repellendus iusto!
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          molestias at, cumque non facilis fugiat?
        </p>
      </div>
      
      <Menu />
    </div>
  );
};

export default Single;
