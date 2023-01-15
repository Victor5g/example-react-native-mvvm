import { UserModel } from "../common/models/user.model";
import client from "./client";

export interface loginDTO {
  email: string;
  password: string;
}

export const login = async ({ email, password }: loginDTO) => {
  // const { data } = await client.post<UserModel>("/auth/login", {
  //   email,
  //   password,
  // });
  // return data;

  return new Promise((resolve) => {
    return setTimeout(
      () =>
        resolve({
          status: 200,
          data: { email: "Victor Morramidy", password: "#$Jh87DF" },
        }),
      3000
    );
  });
};
