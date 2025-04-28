import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "./button";

describe("Button", () => {
  it("Test renders correctly", () => {
    const { getByText } = render(<Button title="Submit" onPress={() => {}} />);
    expect(getByText("Submit")).toBeTruthy();
  });

  it("Test triggers onPress when clicked", () => {
    const mockPress = jest.fn();
    const { getByText } = render(<Button title="Submit" onPress={mockPress} />);
    fireEvent.press(getByText("Submit"));
    expect(mockPress).toHaveBeenCalledTimes(1);
  });

  it("Test passes accessibility label", () => {
    const { getByLabelText } = render(
      <Button
        title="Save"
        onPress={() => {}}
        accessibilityLabel="Save Button"
      />
    );
    expect(getByLabelText("Save Button")).toBeTruthy();
  });
});
