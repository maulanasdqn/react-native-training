import { TLoginRequest, TLoginResponse } from "./type";

export const postLogin = async (
  params: TLoginRequest
): Promise<TLoginResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          token: {
            access_token: "fake-access-token",
            refresh_token: "fake-refresh-token",
          },
          user: {
            id: 1,
            username: params.username,
            name: "Dummy User",
            email: "maul",
          },
        },
        version: 1,
      });
    }, 1000);
  });
};
