import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed.jsx";
import UserPhotoPost from "../User/UserPhotoPost.jsx";
import UserStats from "./UserStats.jsx";
import { UserContext } from "../../UserContext.jsx";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatísticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
