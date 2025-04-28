import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginScreen from "../index";
import { useAuthStore } from "@/stores/auth-store";

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("Login Screen", () => {
  beforeEach(() => {
    const { signOut } = useAuthStore.getState();
    signOut();
  });

  it("Test renders form fields and login button", () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />, {
      wrapper: createWrapper(),
    });

    expect(getByPlaceholderText("Enter your username")).toBeTruthy();
    expect(getByPlaceholderText("Enter your password")).toBeTruthy();
    expect(getByText("Login")).toBeTruthy();
  });

  it("Test fills form and submits and updates Zustand", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />, {
      wrapper: createWrapper(),
    });

    const usernameInput = getByPlaceholderText("Enter your username");
    const passwordInput = getByPlaceholderText("Enter your password");
    const loginButton = getByText("Login");

    fireEvent.changeText(usernameInput, "dummyuser");
    fireEvent.changeText(passwordInput, "dummypassword");
    fireEvent.press(loginButton);

    await waitFor(
      () => {
        const { userData, token } = useAuthStore.getState();
        expect(userData).toBeTruthy();
        expect(userData?.username).toBe("dummyuser");
        expect(token?.access_token).toBe("fake-access-token");
      },
      { timeout: 2000 }
    );
  });
});
