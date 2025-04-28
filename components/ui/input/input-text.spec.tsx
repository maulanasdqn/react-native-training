import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import { InputText } from "./input-text";

const Wrapper = () => {
  const { control } = useForm({
    defaultValues: {
      username: "",
    },
  });

  return (
    <InputText
      control={control}
      name="username"
      label="Username"
      placeholder="Username"
    />
  );
};

describe("Input Text Component", () => {
  it("Test renders input field with label", () => {
    const { getByText, getByPlaceholderText } = render(<Wrapper />);
    expect(getByText("Username")).toBeTruthy();
    expect(getByPlaceholderText("Username")).toBeTruthy();
  });

  it("Test updates value when typing", () => {
    const { getByPlaceholderText } = render(<Wrapper />);
    const input = getByPlaceholderText("Username");
    fireEvent.changeText(input, "NewUsername");
    expect(input.props.value).toBe("NewUsername");
  });
});
