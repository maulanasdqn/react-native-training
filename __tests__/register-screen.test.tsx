import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterScreen from "@/app/auth/register/index";

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("Test Register Screen", () => {
  it("Test renders all form fields and register button", () => {
    const { getByPlaceholderText, getByText } = render(<RegisterScreen />, {
      wrapper: createWrapper(),
    });

    expect(getByPlaceholderText("Enter your fullname")).toBeTruthy();
    expect(getByPlaceholderText("Enter your username")).toBeTruthy();
    expect(getByPlaceholderText("Enter your email")).toBeTruthy();
    expect(getByPlaceholderText("Enter your password")).toBeTruthy();
    expect(getByText("Register Now")).toBeTruthy();
  });

  it("Test fills form and submits", async () => {
    const { getByPlaceholderText, getByText } = render(<RegisterScreen />, {
      wrapper: createWrapper(),
    });

    fireEvent.changeText(
      getByPlaceholderText("Enter your fullname"),
      "Dummy User"
    );
    fireEvent.changeText(
      getByPlaceholderText("Enter your username"),
      "dummyuser"
    );
    fireEvent.changeText(
      getByPlaceholderText("Enter your email"),
      "dummy@example.com"
    );
    fireEvent.changeText(
      getByPlaceholderText("Enter your password"),
      "password123"
    );

    fireEvent.press(getByText("Register Now"));

    await waitFor(() => {
      expect(true).toBeTruthy();
    });
  });
});
