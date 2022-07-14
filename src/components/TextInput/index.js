import React from "react";
import { Input } from "native-base";
import { useController } from "react-hook-form";

export const TextInput = ({
  name,
  control,
  defaultValue,
  InputRightElement,
  InputLeftElement,
  width,
  placeholder,
  type,
  borderRadius,
  borderColor,
}) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
  });
  return (
    <Input
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      w={width}
      type={type}
      borderRadius={borderRadius}
      borderColor={borderColor}
      InputLeftElement={InputLeftElement}
      InputRightElement={InputRightElement}
    />
  );
};
