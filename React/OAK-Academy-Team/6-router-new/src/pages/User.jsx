import React from "react";
import { getAllUser } from "../services/apiUsers";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const User = () => {
  const users = useLoaderData();
  return (
    <div className="usersWrapper">
      {users?.data.map((user, index) => (
        <Card user={user} key={index} />
      ))}
    </div>
  );
};

export const loader = async () => {
  const users = await getAllUser();
  return users;
};

export default User;
