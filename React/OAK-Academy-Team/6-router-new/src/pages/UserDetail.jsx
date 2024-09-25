import React from "react";
import { getSelectedUser } from "../services/apiUsers";
import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const xc = useLoaderData();
  const { avatar, email, first_name, last_name } = xc.data;
  return (
    <div>
      <h3>
        {first_name} {last_name}
      </h3>
      <img src={avatar} alt="avatar" />
      <p>{email}</p>
    </div>
  );
};

export const loader = async ({ params }) => {
  const userDetail = await getSelectedUser(params.id);
  return userDetail;
};

export default UserDetail;
