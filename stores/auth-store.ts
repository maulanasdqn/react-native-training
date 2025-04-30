import { TLoginResponse } from "@/api/auth/type";
import { create } from "zustand";

type TAuthState = {
  token: string | null;
  userData: TLoginResponse | null;
  signIn: (token: string, user: TLoginResponse) => void;
  signOut: () => void;
};

export const useAuthStore = create<TAuthState>((set) => ({
  token: null,
  userData: null,
  signIn: (token, user) => {
    set({ token, userData: user });
  },
  signOut: () => {
    set({ token: null, userData: null });
  },
}));
