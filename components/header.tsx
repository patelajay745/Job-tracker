import { checkUser } from "@/lib/auth-service";
import React from "react";

const Header = async () => {
  await checkUser();

  return <></>;
};

export default Header;
