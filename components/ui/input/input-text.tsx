import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";

type TInputTextProps<T extends FieldValues> = {
  name: string;
  label?: string;
} & TextInputProps &
  UseControllerProps<T>;

export const InputText = <T extends FieldValues>({
  name,
  control,
  label,
  ...props
}: TInputTextProps<T>) => {
  const { field, fieldState } = useController<T>({
    name,
    control,
  });

  return (
    <View style={{ marginBottom: 12 }}>
      {label && <Text style={{ marginBottom: 4 }}>{label}</Text>}
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        {...props}
        style={[
          {
            borderWidth: 1,
            borderColor: fieldState.error ? "red" : "#ccc",
            padding: 10,
            borderRadius: 5,
          },
          props.style,
        ]}
      />
      {fieldState.error?.message && (
        <Text style={{ color: "red", marginTop: 4, fontSize: 12 }}>
          {fieldState.error.message}
        </Text>
      )}
    </View>
  );
};
