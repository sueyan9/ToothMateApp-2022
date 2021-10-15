import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { Context as ClinicContext } from "../context/ClinicContext";
import SearchableDropdown from "react-native-searchable-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";


const SelectClinicScreen = ({ navigation }) => {
  const { state, signup, signupchild } = useContext(AuthContext);

  let firstname = navigation.getParam("firstname");
  let lastname = navigation.getParam("lastname");
  let email = navigation.getParam("email");
  let password = navigation.getParam("password");
  let dob = navigation.getParam("dob");

  const cc = useContext(ClinicContext);
  const [clinic, setClinic] = useState({ name: "Clinic" });

  useEffect(() => {
    cc.getClinicNames();
  }, []);
  const items = cc.state;

  return (
    <LinearGradient
    colors={["#78d0f5", "white", "#78d0f5"]}
    style={styles.container}
  >
    <View style={styles.container}>
      <Text style={styles.clinicTextStyle}>Select Your Clinic</Text>
      <SearchableDropdown
        items={items}
        onItemSelect={(item) => {
          setClinic({ id: item._id, name: item.name });
        }}
        textInputProps={{
          placeholder: `${clinic.name}`,
          style: {
            padding: 5,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
        placeholderTextColor="#888"
        containerStyle={styles.dropdownContainer}
        itemStyle={{
          padding: 8,
          marginTop: 3,
          backgroundColor: "white",
          borderColor: "#bbb",
          borderWidth: 3,
          borderRadius: 20,
        }}
        itemTextStyle={{ color: "#222" , marginLeft: 2, fontSize: 15, fontWeight: "bold"}}
        />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
      <Spacer>
        <Button
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        title="Sign Up"
        titleStyle={styles.buttonText}
          onPress={() => {
            signup({
              firstname,
              lastname,
              email,
              password,
              dob,
              clinic: clinic.id,
            });
          }}
        />
      </Spacer>
    </View>
    </LinearGradient>

  );
};

SelectClinicScreen.navigationOptions = () => {
  return {
    // headerShown: false,
    headerTitle: "",
    headerTintColor: 'black',
    headerBackTitle: "Sign Up",
    safeAreaInsets: Platform.OS === "ios" ? { top: 45 } : { top: 30 },

    
    headerStyle: {
      backgroundColor: '#78d0f5',
      borderBottomWidth: 0,
      shadowOpacity: 0,
      elevation: 0,
      
      
  }
    
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  inputContainerStyle: {
    height: 30,
    marginBottom: 0,
  },
  textStyle: {
    fontSize: 16,
  },
  labelStyle: {
    fontSize: 14,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
  link: {
    color: "blue",
  },
  dropdownContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  clinicTextStyle: {
    marginLeft: 10,
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
    paddingTop: 10
  },
  buttonContainer: {
    // borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    width: "90%",
    marginLeft: "5%",
  },
  button: {
    paddingVertical: 10,
    backgroundColor: "#10334d",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },

});

export default SelectClinicScreen;
