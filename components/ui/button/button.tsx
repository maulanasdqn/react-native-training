import React from "react";
import {
  Button as RNButton,
  ButtonProps as RNButtonProps,
  StyleSheet,
  View,
} from "react-native";

type Props = RNButtonProps;

export const Button = ({
  title,
  onPress,
  color,
  accessibilityLabel,
  disabled,
}: Props) => {
  const isDisabled = disabled ?? false;

  return (
    <View style={isDisabled ? styles.disabledWrapper : styles.enabledWrapper}>
      <RNButton
        title={title}
        onPress={onPress}
        color={isDisabled ? "#ccc" : color}
        accessibilityLabel={accessibilityLabel}
        disabled={isDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  enabledWrapper: {
    opacity: 1,
  },
  disabledWrapper: {
    opacity: 0.6,
  },
});
