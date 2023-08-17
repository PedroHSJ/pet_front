import { AxiosResponse } from "axios";
import { api } from ".";
import { IResponseToken } from "../../interfaces/IResponseToken";
import { ILoginFormWithPassword } from "../../interfaces/ILoginForm";

const loginWithPass = async (data: ILoginFormWithPassword) => {
  const response = await api.post<unknown, AxiosResponse<IResponseToken>>(
    "/auth",
    {
      email: data.email,
      password: data.password,
      scope: "USER",
    }
  );

  return response.data;
};

export { loginWithPass };
