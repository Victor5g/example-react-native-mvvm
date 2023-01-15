import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import useLoginViewModel from "./view.model";

import style from "./style";

const LoginView: React.FC = () => {
  
  const { email, password, setEmail, setPassword, isLoading, onSubmit } = useLoginViewModel();

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>E-mail</Text>
        <TextInput
          style={style.input}
          placeholderTextColor={style.input.placeholderTextColor}
          placeholder="example.email@gmail.com"
          value={email}
          onChangeText={setEmail}
        />

        <Text>Password</Text>
        <TextInput
          style={style.input}
          placeholderTextColor={style.input.placeholderTextColor}
          placeholder="********"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        style={style.button}
        onPress={onSubmit}
        disabled={isLoading}
      >
        <Text style={style.buttonTitle}>{isLoading ? "...." : "login"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginView;
