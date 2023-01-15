import { useState } from "react";
import { Alert } from "react-native";

import { LoginViewModel } from "./model";

import { login } from "../../repositories/auth.repository";

const useLoginViewModel = (): LoginViewModel => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await login({ email, password });
      console.log("Response:", response);
    } catch (error) {
      Alert.alert("Oops!!,", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    isLoading,
    setEmail,
    setPassword,
    onSubmit,
  };
};

export default useLoginViewModel;
