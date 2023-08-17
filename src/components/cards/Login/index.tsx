import { useEffect } from "react";
import LoginWithPassword from "./LoginWithPassword";
import LoginWithoutPassword from "./LoginWithoutPassword";
import useConfig from "../../../hooks/useConfig";
import { Loading } from "../../resources/Loading";
import { useTheme } from "styled-components";

const LoginCard = () => {
  const { colors } = useTheme();

  const loginCard = {
    withPassword: <LoginWithPassword />,
  };
  //   if (!type || loading) return <Loading size={50} color={colors.primary} />;
  return <LoginWithPassword />;
};

export default LoginCard;
