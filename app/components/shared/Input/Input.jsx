import React from "react";
import { Input as NBInput, Icon } from "native-base";

const Input = ({
  type = "text",
  placeholder = "",
  error = "",
  leftIcon = null,
  rightIcon = null,
  onChange = () => {},
}) => (
  <NBInput
    type={type}
    placeholder={placeholder}
    {...(leftIcon && {
      InputLeftElement: (
        <Icon
          as={<MaterialCommunityIcons name="account-lock-outline" />}
          color="#c1c1c1"
          size={5}
          ml={1}
        />
      ),
    })}
    {...(rightIcon && {
      InputRightElement: (
        <Icon
          as={
            <MaterialCommunityIcons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
            />
          }
          size={5}
          color="#c1c1c1"
          mr={1}
          onPress={handleOnPressIcon}
        />
      ),
    })}
    h={10}
    color="#c1c1c1"
    _focus={{ borderColor: "#34d399" }}
    onChange={onChange}
  />
);

export default Input;
