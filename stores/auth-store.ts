import { TTokenItem } from "@/api/auth/type";
import { TUserItem } from "@/api/users/type";
import { create } from "zustand";

type TAuthState = {
  token: TTokenItem | null;
  userData: TUserItem | null;
  signIn: (token: TTokenItem, user: TUserItem) => void;
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
