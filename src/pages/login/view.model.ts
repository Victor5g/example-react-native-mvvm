import { useState } from "react";
import { Alert } from "react-native";
import { login } from "../../repositories/auth.repository";

const useLoginViewModel = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    console.log("Log: ", { email, password });
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
