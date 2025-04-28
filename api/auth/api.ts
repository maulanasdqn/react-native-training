import {
  TLoginRequest,
  TLoginResponse,
  TRegisterRequest,
  TRegisterResponse,
} from "./type";

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

export const postRegister = async (
  params: TRegisterRequest
): Promise<TRegisterResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          message: "User registered successfully",
        },
        version: 1,
      });
    }, 1000);
  });
};
