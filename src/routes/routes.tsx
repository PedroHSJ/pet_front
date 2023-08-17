import { RouterProvider } from "react-router-dom";
import { AuthRoutes } from "./authRoutes";
import { GuestRoutes } from "./guestRoutes";
import { useAuth } from "../hooks/auth";

export const AppRoutes = (): JSX.Element => {
  const { isAuthorized } = useAuth();

  return <RouterProvider router={isAuthorized ? AuthRoutes : GuestRoutes} />;
};
