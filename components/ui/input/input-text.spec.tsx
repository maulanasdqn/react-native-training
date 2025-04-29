import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputText } from "./input-text";
import { Button } from "react-native";

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
});

const Wrapper = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
    },
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = handleSubmit(() => {});

  return (
    <>
      <InputText
        control={control}
        name="username"
        label="Username"
        placeholder="Username"
      />
      <Button title="Submit" onPress={onSubmit} />
    </>
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

  it("Test shows error message when input invalid", async () => {
    const { getByPlaceholderText, getByText } = render(<Wrapper />);
    const input = getByPlaceholderText("Username");

    fireEvent.changeText(input, "a");
    fireEvent.changeText(input, "b");

    await waitFor(() => {
      expect(getByText("Username must be at least 3 characters")).toBeTruthy();
    });
  });
});
