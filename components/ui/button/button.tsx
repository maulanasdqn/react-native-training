import React from "react";
import { Button as Btn, ButtonProps as RNButtonProps } from "react-native";

type Props = RNButtonProps;

export const Button = ({
  title,
  onPress,
  color,
  accessibilityLabel,
}: Props) => {
  return (
    <Btn
      title={title}
      onPress={onPress}
      color={color}
      accessibilityLabel={accessibilityLabel}
    />
  );
};
