import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* {navigation.state === "loading" && <p>Loading...</p>} */}
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
