import React from "react";
import "./user.css";

const User = ({ user }) => {
  return (
    <div className="user">
      <div class="card">
        <div class="tools">
          <div class="circle">
            <span class="red box"></span>
          </div>
          <div class="circle">
            <span class="yellow box"></span>
          </div>
          <div class="circle">
            <span class="green box"></span>
          </div>
        </div>
        <div class="card__content">
          <img src={user.picture.large} alt={user.name.first} />
          <p className="fname">{`Full Name: ${user.name.first} ${user.name.last}`}</p>
          <p className="phone">{`Phone: ${user.phone}`}</p>
          <p className="gender">{`Gender: ${user.gender}`}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
