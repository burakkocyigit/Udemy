import React from "react";
import Menu from "../components/Menu";
import Back from "../components/Back";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="appLayoutWrapper">
      <Menu />
      {isLoading && <Loader />}
      <main className="mainWrapper">
        <Outlet />
      </main>
      <Back />
    </div>
  );
};

export default AppLayout;
