import React from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";

import useLoginViewModel from "./view.model";

import style from "./style";

const LoginView: React.FC = () => {
  const { email, password, setEmail, setPassword, isLoading, onSubmit } =
    useLoginViewModel();

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>E-mail</Text>
        <TextInput
          placeholder="example.email@gmail.com"
          value={email}
          onChangeText={setEmail}
        />

        <Text>Password</Text>
        <TextInput
          placeholder="********"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Button
        title={isLoading ? "..." : "login"}
        onPress={onSubmit}
        disabled={isLoading}
      />
    </SafeAreaView>
  );
};

export default LoginView;
